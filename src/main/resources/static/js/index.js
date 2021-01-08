/**
 * @JSName index.js
 * @Description index
 * @Author 朱福盛
 * @Date 2020/12/25 10:50
 * @Version 1.0
 */


/**
 * 智图地图内容
 */
var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
});
var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
    maxZoom: 18,
    minZoom: 5
});
var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
    maxZoom: 18,
    minZoom: 5
});
var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
    maxZoom: 18,
    minZoom: 5
});
var normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
    maxZoom: 18,
    minZoom: 5
});
var normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
    maxZoom: 18,
    minZoom: 5
});
/**
 * 天地图内容
 */
var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
    normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
        maxZoom: 18,
        minZoom: 5
    }),
    imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
    imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 5
    });

var normal = L.layerGroup([normalm, normala]),
    image = L.layerGroup([imgm, imga]);
/**
 * 谷歌
 */
var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
    satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    });
/**
 * 高德地图
 */
var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
});
var Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    maxZoom: 18,
    minZoom: 5
});
var Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
    maxZoom: 18,
    minZoom: 5
});
var Gaodimage = L.layerGroup([Gaodimgem, Gaodimga]);


let openStreeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var baseLayers = {
    "智图地图": normalm1,
    "智图多彩": normalm2,
    "智图午夜蓝": normalm3,
    "智图灰色": normalm4,
    "智图暖色": normalm5,
    "智图冷色": normalm6,
    "天地图": normal,
    "天地图影像": image,
    "谷歌地图": normalMap,
    "谷歌影像": satelliteMap,
    "高德地图": Gaode,
    "高德影像": Gaodimage,
    "openStreeMap": openStreeMap
};

const center = [32.671216, 116.818249],
    zoom = 15,
    url = "https://t0.tianditu.gov.cn/";

const map = L.map("map", {
    layers: [openStreeMap],
    // zoomControl: false
    // crs: L.CRS.EPSG4326
}).setView(
    center,
    zoom
);

L.control.layers(baseLayers, null).addTo(map);
// L.control.zoom({
//     zoomInTitle: '放大',
//     zoomOutTitle: '缩小'
// }).addTo(map);

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
    points:{//layername
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
// var mapboxPbfLayer = L.vectorGrid.protobuf(mapboxUrl, mapboxVectorTileOptions).addTo(map);

var polygonUrl = "http://localhost:8000/getTiles/polygon/{z}/{x}/{y}";
var polygonLayer = L.vectorGrid.protobuf(polygonUrl , mapboxVectorTileOptions).addTo(map);

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
