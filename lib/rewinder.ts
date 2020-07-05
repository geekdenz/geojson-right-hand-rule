import kinks from "@turf/kinks";
import unkinkPolygon from "@turf/unkink-polygon";

export function rewind(gj, outer) {
          switch ((gj && gj.type) || null) {
              case 'FeatureCollection':
                  console.log('A', gj)
                //   gj.features = gj.features.map(curryOuter(rewind, outer));
                  gj.features = gj.features.map(curryOuter(rewind, outer));
                  return gj;
              case 'Feature':
                //   if (gj.geometry.type === 'LineString') {
                //       return gj;
                //   }
                  console.log('B0', gj)
                  gj.geometry = rewind(gj.geometry, outer);
                  console.log('B1', gj)
                  return gj;
              case 'Polygon':
              case 'MultiPolygon':
                  console.log('C')
                //   if (kinks(gj).features.length) {
                //       gj = unkinkPolygon(gj);
                //   }
                  return correct(gj, outer);
              default:
                  console.log('D')
                  return gj;
          }
      }

      function curryOuter(a, b) {
          return function(_) { return a(_, b); };
      }

      function correct(_, outer) {
          if (_.type === 'Polygon') {
              _.coordinates = correctRings(_.coordinates, outer);
          } else if (_.type === 'MultiPolygon') {
              _.coordinates = _.coordinates.map(curryOuter(correctRings, outer));
          }
          return _;
      }

      function correctRings(_, outer) {
          outer = !!outer;
          _[0] = wind(_[0], !outer);
          for (var i = 1; i < _.length; i++) {
              _[i] = wind(_[i], outer);
          }
          return _;
      }

      function wind(_, dir) {
          return cw(_) === dir ? _ : _.reverse();
      }

      function cw(_) {
          return ringArea(_) >= 0;
      }

      function geometry(_) {
          if (_.type === 'Polygon') return polygonArea(_.coordinates);
          else if (_.type === 'MultiPolygon') {
              var area = 0;
              for (var i = 0; i < _.coordinates.length; i++) {
                  area += polygonArea(_.coordinates[i]);
              }
              return area;
          } else {
              return null;
          }
      }

      function polygonArea(coords) {
          var area = 0;
          if (coords && coords.length > 0) {
              area += Math.abs(ringArea(coords[0]));
              for (var i = 1; i < coords.length; i++) {
                  area -= Math.abs(ringArea(coords[i]));
              }
          }
          return area;
      }

      function ringArea(coords) {
          var area = 0;

          if (coords.length > 2) {
              var p1, p2;
              for (var i = 0; i < coords.length - 1; i++) {
                  p1 = coords[i];
                  p2 = coords[i + 1];
                  area += rad(p2[0] - p1[0]) * (2 + Math.sin(rad(p1[1])) + Math.sin(rad(p2[1])));
              }

              area = area * 6378137 * 6378137 / 2;
          }

          return area;
      }

      function rad(_) {
          return _ * Math.PI / 180;
      }