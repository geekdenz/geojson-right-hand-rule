import GeoJSON from 'ol/format/GeoJSON';
// import {default as ol} from 'ol'
// import ol from 'ol'
// import {readFileSync, writeFileSync} from 'fs'
// ol.format.G
export function ensure(maybeInvalidGeoJson) {
    const olGeoJson = GeoJSON();
    const parsed = olGeoJson.readFeatures(maybeInvalidGeoJson);
    const rhrGeoJson = olGeoJson.writeFeaturesObject(parsed, {
        rightHanded: true,
        dataProjection: 'EPSG:2193'
    });
    return rhrGeoJson;
}
