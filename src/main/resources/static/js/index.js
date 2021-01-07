/**
 * @JSName index.js
 * @Description index
 * @Author 朱福盛
 * @Date 2020/12/25 10:50
 * @Version 1.0
 */

const center = [32.671216, 116.818249],
    zoom = 15,
    url = "https://t0.tianditu.gov.cn/";
const map = L.map("map", {
    // crs: L.CRS.EPSG4326
}).setView(
    center,
    zoom
);
// L.tileLayer(
//     url +
//     "vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=0b018552994f71a9467d24461a8f8238", {
//         maxZoom: 20,
//         tileSize: 256,
//         zoomOffset: 1,
//     }
// ).addTo(map);
// L.tileLayer(
//     url +
//     "cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=0b018552994f71a9467d24461a8f8238", {
//         maxZoom: 20,
//         tileSize: 256,
//         zoomOffset: 1,
//     }
// ).addTo(map);

var vectorTileStyling = {
    //layer样式,line没有fill属性
    gj:{//layername
        weight: 1,
        color: '#cf52d3',
        opacity: 0.6
    },
    //使用自定义icon
//          point:{//layername
//
//              weight: 1,
//              icon: myIcon//自定义icon
//          },
    //点
    //方法一
    point:{//layername
        weight: 2,
        color: 'red',
        opacity: 1,
        fillColor: 'yellow',
        fill: true,
        radius: 6,
        fillOpacity: 0.7
    },
    //方法二
//          point: function(properties, zoom) {
//              return {
//                  weight: 2,
//                  color: 'red',
//                  opacity: 1,
//                  fillColor: 'yellow',
//                  fill: true,
//                  radius: 6,
//                  fillOpacity: 0.7
//              }
//          },
    //线
    line:{//layername
        weight:1,
        color: '#f2b648',//颜色
        fillColor: 'red',
        fillOpacity:0,//填充透明度
        dashArray: '5'  //设置虚线
    },
    //面
    polygon:{//layername
        weight: 1,//边线宽度
        fillColor: '#53e033',//填充颜色
        color: 'red',//边线颜色
        fill: true,
        fillOpacity: 0.2,//填充颜色透明度
        opacity: 0.4,//边线颜色透明度
    }
};

// var mapboxUrl = "http://localhost:8000/getTiles/roads/{z}/{x}/{y}";
var mapboxUrl = "http://localhost:8000/tiles/points/{z}/{x}/{y}";

var mapboxVectorTileOptions = {
    rendererFactory: L.canvas.tile,
    vectorTileLayerStyles: vectorTileStyling
};

var mapboxPbfLayer = L.vectorGrid.protobuf(mapboxUrl, mapboxVectorTileOptions).addTo(map);
// map.addLayer(mapboxPbfLayer);

// const tmpUrl = "http://124.193.68.152:55980/geoserver/gwc/service/tms/1.0.0/bagongshan%3Alzc_polygon@EPSG%3A4326@pbf/{z}/{x}/{y}.pbf";
// const tmpUrl = "http://localhost:8000/getTiles/points/{z}/{x}/{y}";
// var vector = {
//     layerURL: tmpUrl,
//     rendererFactory: L.canvas.tile,
//     // tms: true,
//     vectorTileLayerStyles: {
//         // 'vegpl': function (properties, zoom) {
//         //     return {
//         //         fillColor: 'green',
//         //     }
//         // },
//         //layer样式,line没有fill属性
//         gj:{//layername
//             weight: 1,
//             color: '#cf52d3',
//             opacity: 0.6
//         },
//         //使用自定义icon
// //          point:{//layername
// //
// //              weight: 1,
// //              icon: myIcon//自定义icon
// //          },
//         //点
//         //方法一
//         point:{//layername
//             weight: 2,
//             color: 'red',
//             opacity: 1,
//             fillColor: 'yellow',
//             fill: true,
//             radius: 6,
//             fillOpacity: 0.7
//         },
//         //方法二
// //          point: function(properties, zoom) {
// //              return {
// //                  weight: 2,
// //                  color: 'red',
// //                  opacity: 1,
// //                  fillColor: 'yellow',
// //                  fill: true,
// //                  radius: 6,
// //                  fillOpacity: 0.7
// //              }
// //          },
//         //线
//         line:{//layername
//             weight:1,
//             color: '#f2b648',//颜色
//             fillColor: 'red',
//             fillOpacity:0,//填充透明度
//             dashArray: '5'  //设置虚线
//         },
//         //面
//         polygon:{//layername
//             weight: 1,//边线宽度
//             fillColor: '#53e033',//填充颜色
//             color: 'red',//边线颜色
//             fill: true,
//             fillOpacity: 0.2,//填充颜色透明度
//             opacity: 0.4,//边线颜色透明度
//         }
//     },
//     interactive: true,	//开启VectorGrid触发mouse/pointer事件
//     getFeatureId: function (f) {
//         return f.properties.osm_id;
//     }
// };
// var orTile = new L.vectorGrid.protobuf(tmpUrl, vector).addTo(map);

map.on('click', function(e) {
    var content = '你临幸了这个点：<br>';
    content += e.latlng.toString();
    // mypop.setLatLng(e.latlng)
    //     .setContent(content)
    //     .openOn(m);
});
// const pbfUrl = "http://172.17.11.249:8080/geoserver/gwc/service/tms/1.0.0/test%3Axlc_polygon_test@EPSG%3A4326@pbf/{z}/{x}/{y}.pbf";
// var vectorTileOptions = {
//     layerURL: pbfUrl,
//     rendererFactory: L.canvas.tile,
//     tms: true,
//     vectorTileLayerStyles: {
//         'vegpl': function (properties, zoom) {
//             return {
//                 fillColor: 'green',
//             }
//         },
//     },
//     interactive: true,	//开启VectorGrid触发mouse/pointer事件
//     getFeatureId: function (f) {
//         return f.properties.osm_id;
//     }
// };
// var vectorTile = new L.vectorGrid.protobuf(pbfUrl, vectorTileOptions).addTo(map);

// const pointUrl = "http://172.17.11.249:8080/geoserver/gwc/service/tms/1.0.0/test%3Axlc_point_test@EPSG%3A4326@pbf/{z}/{x}/{y}.pbf";
// var pointTileOptions = {
//     layerURL: pointUrl,
//     rendererFactory: L.canvas.tile,
//     tms: true,
//     vectorTileLayerStyles: {
//         'vegpl': function (properties, zoom) {
//             return {
//                 fillColor: 'green',
//             }
//         },
//     },
//     interactive: true,	//开启VectorGrid触发mouse/pointer事件
//     getFeatureId: function (f) {
//         return f.properties.osm_id;
//     }
// };
// var pointTile = new L.vectorGrid.protobuf(pointUrl, pointTileOptions).addTo(map);

// const annotationUrl = "http://172.17.11.249:8080/geoserver/gwc/service/tms/1.0.0/test%3Axlc_annotation_test@EPSG%3A4326@pbf/{z}/{x}/{y}.pbf";
// var annotationTileOptions = {
//     layerURL: annotationUrl,
//     rendererFactory: L.canvas.tile,
//     tms: true,
//     vectorTileLayerStyles: {
//         'vegpl': function (properties, zoom) {
//             return {
//                 fillColor: 'green',
//             }
//         },
//     },
//     interactive: true,	//开启VectorGrid触发mouse/pointer事件
//     getFeatureId: function (f) {
//         return f.properties.osm_id;
//     }
// };
// var annotationTile = new L.vectorGrid.protobuf(annotationUrl, annotationTileOptions).addTo(map);
