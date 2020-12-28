/**
 * @JSName index.js
 * @Description index
 * @Author 朱福盛
 * @Date 2020/12/25 10:50
 * @Version 1.0
 */

const center = [39.9, 116.39],
    zoom = 10,
    url = "https://t0.tianditu.gov.cn/";
const map = L.map("map", {
    crs: L.CRS.EPSG4326
}).setView(
    center,
    zoom
);
L.tileLayer(
    url +
    "vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=0b018552994f71a9467d24461a8f8238", {
        maxZoom: 20,
        tileSize: 256,
        zoomOffset: 1,
    }
).addTo(map);
L.tileLayer(
    url +
    "cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=0b018552994f71a9467d24461a8f8238", {
        maxZoom: 20,
        tileSize: 256,
        zoomOffset: 1,
    }
).addTo(map);
const pbfUrl = "http://172.17.11.249:8080/geoserver/gwc/service/tms/1.0.0/test%3Acounties_china_test@EPSG%3A4326@pbf";
var vectorTileOptions = {
    layerURL: pbfUrl,
    rendererFactory: L.canvas.tile,
    tms: true,
    vectorTileLayerStyles: {
        'vegpl': function (properties, zoom) {
            return {
                fillColor: 'green',
            }
        },
    },
    interactive: true,	//开启VectorGrid触发mouse/pointer事件
    getFeatureId: function (f) {
        return f.properties.osm_id;
    }
};
var vectorTile = new L.vectorGrid.protobuf(pbfUrl, vectorTileOptions).addTo(map);
