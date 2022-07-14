/**
 * @JSName mapbox_index.js
 * @Description TODO
 * @Author 朱福盛
 * @Date 2021/3/25 16:15
 * @Version 1.0
 */

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VwdCIsImEiOiJja21weDgwM3YwdWNjMm9ueHl1bG1jYnR4In0.xuN53dn7LWONSlIY108NFQ';
var map = new mapboxgl.Map({
    container: 'map',
    zoom: 17,
    center: [116.81943,32.67051],
    style: 'mapbox://styles/mapbox/streets-v11',
    preserveDrawingBuffer:true //canvas toDataURL
});

let nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
// let geolocate = new mapboxgl.GeolocateControl({
//     positionOptions: {
//         // 高精度定位
//         enableHighAccuracy: true
//     },
//     // 跟踪位置变化
//     trackUserLocation: true
// });
// map.addControl(geolocate);
// 比例尺
let scale = new mapboxgl.ScaleControl({
    maxWidth: 100,
    unit: 'metric'
});
map.addControl(scale);

map.on('load', function loaded() {
    map.addSource('polygon', {
        'type': 'vector',
        // 'tiles': ['http://8.141.156.76:8081/getTiles/polygon/{z}/{x}/{y}']
        'tiles': ['http://172.17.19.219:8080/{z}/{x}/{y}']
    });
    map.addLayer({
        'id': 'polygon',
        'source': 'polygon',
        'source-layer': 'polygon',
        'type': 'fill',
        "layout":{
            "visibility":'visible'
        },
        "paint": {
            "fill-color": "#468838",
            "fill-opacity": 0.5,
        }
    });
});
layui.use(['layer', 'form'], function () {
    let layer = layui.layer, form = layui.form;
    // map.on('dblclick',function (e) {
    //     // console.log('A dblclick event has occurred at ' + e.lngLat);
    //     let data = map.getCanvas().toDataURL('image/png');
    //     console.log(map.getCanvasContainer());
    //     $('#printImg').attr('src', data);
    //     layer.open({
    //         type: 1,
    //         title: false,
    //         content: $('#print'),
    //         area: ['80%', '69%'],
    //         anim: 0, //0-6的动画形式，-1不开启
    //         closeBtn: 0,
    //         shadeClose: true,
    //         success: function(layero, index){
    //             // var scale = document.getElementsByClassName('leaflet-control-scale-line')[0].innerHTML;
    //             // $('#scaleSpan').text('1:' + scale);
    //         },
    //         end: function () {
    //         }
    //     });
    // });

    // $('#pri').on('click', function (i, v) {
    //     const data = map.getCanvas().toDataURL('image/png');
    //     let ace = $('#printImg');
    //     ace.attr('src', data);
    //     console.log(ace);
    //     layer.open({
    //         type: 1,
    //         title: false,
    //         content: $('#print'),
    //         area: ['80%', '69%'],
    //         anim: 0, //0-6的动画形式，-1不开启
    //         closeBtn: 0,
    //         shadeClose: true,
    //         success: function(layero, index){
    //             // html2canvas(snapshot).then(function(canvas) {
    //             //     // printImg.src= canvas.toDataURL();
    //             //     printImg.attr('src', canvas.toDataURL());
    //             // });
    //         },
    //         end: function () {
    //
    //         }
    //     });
    // });


    const mapPrint  = new MapPrintTool({
        enableImg: false, //是否出图
        fileName: 'mapDemo.png' // 文件名
    });
    map.addControl(mapPrint, 'top-left');

    let snapshot = document.getElementById('snapshot');
    let printImg = $('<img>');
    // 监听打印 获取数据
    mapPrint.on('success',function (res) {
        // const data = map.getCanvas().toDataURL('image/png')  ;
        // console.log(map.getCanvas());
        let mapImg = $('<img>');
        mapImg.attr('src', res.data);
        console.log(mapImg);
        var w = 708;//printImg.width();//设置最大宽度,也可根据img的外部容器 而动态获得,比如：$("#demo").width();
        var img_w = $('#map').width();//图片宽度
        var img_h = $('#map').height();//图片高度
        if (img_w > w) {//如果图片宽度超出指定最大宽度
            var height = (w * img_h) / img_w; //高度等比缩放
            mapImg.css({
                "width" : w,"height" : height
            });//设置缩放后的宽度和高度
        }
        mapImg.css('border', '2px solid black');

        $(snapshot).empty();
        $(snapshot).append('<span style="padding-top: 10px; font-size: 25px; color: black;">中国地图</span>');
        let printDiv = $('<div style="border: 3px solid black; padding: 15px 15px; margin-top: 10px;"></div>');
        printDiv.append(mapImg);
        $(snapshot).append(printDiv);

        let scale = $('.mapboxgl-ctrl-scale').text();
        $(snapshot).append('<span>1:' + scale + '</span>');

        layer.open({
            type: 1,
            title: false,
            content: $('#print'),
            area: ['80%', '69%'],
            anim: 0, //0-6的动画形式，-1不开启
            closeBtn: 0,
            shadeClose: true,
            success: function(layero, index){
                html2canvas(snapshot).then(function(canvas) {
                    // printImg.src= canvas.toDataURL();
                    printImg.attr('src', canvas.toDataURL());
                });
            },
            end: function () {

            }
        });
    });

    form.on('submit(print)', function(data){
        // IE打印
        // document.getElementById('WebBrowser').ExecWB(6,2)
        //
        // // jqprint
        // $('#snapshot').jqprint({
        //     debug: false,
        //     importCSS: true,
        //     printContainer: true
        // });

        printImg.print({
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
            deferred: $.Deferred().done(function() {
                console.log('Printing done', arguments);
            })
        });
    });
});
