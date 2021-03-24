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
    maxZoom: 25,
    minZoom: 5
});
var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
    maxZoom: 25,
    minZoom: 5
});
var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
    maxZoom: 25,
    minZoom: 5
});
var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
    maxZoom: 25,
    minZoom: 5
});
var normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
    maxZoom: 25,
    minZoom: 5
});
var normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
    maxZoom: 25,
    minZoom: 5
});
/**
 * 天地图内容
 */
var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
        maxZoom: 25,
        minZoom: 5
    }),
    normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
        maxZoom: 25,
        minZoom: 5
    }),
    imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
        maxZoom: 25,
        minZoom: 5
    }),
    imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
        maxZoom: 25,
        minZoom: 5
    });

var normal = L.layerGroup([normalm, normala]),
    image = L.layerGroup([imgm, imga]);
/**
 * 谷歌
 */
var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
        maxZoom: 25,
        minZoom: 5
    }),
    satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
        maxZoom: 25,
        minZoom: 5
    });
/**
 * 高德地图
 */
var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 25,
    minZoom: 5
});
var Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    maxZoom: 25,
    minZoom: 5
});
var Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
    maxZoom: 25,
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
    zoom = 30,
    url = "https://t0.tianditu.gov.cn/";

const map = L.map("map", {
    layers: [openStreeMap],
    zoomControl: false
    // crs: L.CRS.EPSG4326
}).setView(
    center,
    zoom
);

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
var mapboxUrl = "http://localhost:8000/getTiles/points/{z}/{x}/{y}";
var mapboxVectorTileOptions = {
    rendererFactory: L.canvas.tile,
    vectorTileLayerStyles: vectorTileStyling
};
var pointLayer = L.vectorGrid.protobuf(mapboxUrl, mapboxVectorTileOptions);

var polygonUrl = "http://localhost:8000/getTiles/polygon/{z}/{x}/{y}";
var polygonLayer = L.vectorGrid.protobuf(polygonUrl , mapboxVectorTileOptions);

var overLayers = {
    "lzc_polygon": polygonLayer,
    "lzc_point": pointLayer
};

L.control.layers(baseLayers, overLayers).addTo(map);
L.control.zoom({
    // zoomInTitle: '放大',
    // zoomOutTitle: '缩小'
}).addTo(map);
L.control.scale({
    maxWidth: 100,
    metric: true,
    imperial: false
}).addTo(map);
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

// marker
// var marker = L.marker([32.671216, 116.818249]).addTo(map);
// 多边形
// var polygon = L.polygon([
//
//     [32.670936, 116.817831],
//
//     [32.670466, 116.817434],
//
//     [32.670575, 116.818571]
//
// ]).addTo(map);
// polygon.bindPopup("I am a polygon.");
var popup = L.popup();
map.on('click', function(e) {
    var content = '你临幸了这个点：<br>';
    content += e.latlng.toString();
    console.log(content);
    popup.setLatLng(e.latlng)
        .setContent(content)
        .openOn(map);
    // 圆形检索
    // $.ajax({
    //     url: "/listLzcPolygon",
    //     type: "get",
    //     data: {
    //         lat: e.latlng.lat,
    //         lon: e.latlng.lng,
    //         zoom: map.getZoom()
    //     },
    //     success: function (value) {
    //         console.log(value);
    //     }
    // });
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

// easyPrint
// var printer = L.easyPrint({
//     tileLayer: polygonLayer,
//     sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
//     filename: 'myMap',
//     exportOnly: true,
//     hideControlContainer: false
// }).addTo(map);
//
// function manualPrint () {
//     console.log(printer);
//     printer.printMap('CurrentSize', 'MyManualPrint');
// }

// print
// let printProvider = L.print.provider({
//     // capabilities: printConfig,
//     url: 'http://path/to/mapfish/print',
//     // url: 'http://localhost:8000/print',
//     method: 'GET',
//     dpi: 254,
//     outputFormat: 'pdf',
//     customParams: {
//         mapTitle: 'Print Test',
//         comment: 'Testing Leaflet printing'
//     }
// });
//
// // Create a print control with the configured provider and add to the map
// let printControl = L.control.print({
//     provider: printProvider
// });
// map.addControl(printControl);

// image
// var snapshot = document.getElementById('snapshot');
let printImg = $('<img />');
// let printImg = $('#printImg');
function doImage(err, canvas) {
    var img = document.createElement('img');
    var dimensions = map.getSize();
    img.width = dimensions.x;
    img.height = dimensions.y;
    img.src = canvas.toDataURL();
    img.name = 'mapImg';

    var w = 710;//printImg.width();//设置最大宽度,也可根据img的外部容器 而动态获得,比如：$("#demo").width();
    // $('#snapshot').css('width', w);
    var img_w = img.width;//图片宽度
    var img_h = img.height;//图片高度
    if (img_w > w) {//如果图片宽度超出指定最大宽度
        var height = (w * img_h) / img_w; //高度等比缩放
        $(img).css({
            "width" : w,"height" : height
        });//设置缩放后的宽度和高度
    }
    $(img).css('border', '2px solid black');

    // printImg.innerHTML = '';
    // printImg.appendChild(img);

    // let snapshot = document.createElement('div');
    let snapshot = document.getElementById('snapshot');
    $(snapshot).empty();
    $(snapshot).append('<span style="padding-top: 10px; font-size: 25px; color: black;">中国地图</span>');
    let printDiv = $('<div style="border: 3px solid black; padding: 15px 15px; margin-top: 10px;"></div>');
    printDiv.append(img);
    $(snapshot).append(printDiv);

    html2canvas(snapshot).then(function(canvas) {
        // printImg.src= canvas.toDataURL();
        printImg.attr('src', canvas.toDataURL());
    });

}

layui.use(['table', 'layer', 'form'], function() {
    let layer = layui.layer, form = layui.form;
    L.easyButton('<img src="lib/leaflet/print/images/printer.png">', function(btn, map){

        leafletImage(map, doImage);
        layer.open({
            type: 1,
            title: false,
            content: $('#print'),
            area: ['80%', '69%'],
            anim: 0, //0-6的动画形式，-1不开启
            closeBtn: 0,
            shadeClose: true,
            success: function(layero, index){
                // var scale = document.getElementsByClassName('leaflet-control-scale-line')[0].innerHTML;
                // $('#scaleSpan').text('1:' + scale);
            },
            end: function () {
            }
        });

    }).addTo(map);

    form.on('submit(print)', function(data){
        // IE打印
        // document.getElementById('WebBrowser').ExecWB(6,2)

        // jqprint
        // $('#snapshot').jqprint({
        //     debug: false,
        //     importCSS: true,
        //     printContainer: true
        // });


        $(printImg).print({
            //Use Global styles
            globalStyles : false,
            //Add link with attrbute media=print
            mediaPrint : false,
            //Print in a hidden iframe
            iframe : false,
            //Don't print this
            noPrintSelector : ".avoid-this",
            //Add this at top
            // prepend : "中国地图<br/>",
            //Add this on bottom
            // append : "<br/>Buh Bye!",
            //Log to console when printing is done via a deffered callback
            deferred: $.Deferred().done(function() { console.log('Printing done', arguments); })
        });
    });
});
