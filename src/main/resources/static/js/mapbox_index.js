/**
 * @JSName mapbox_index.js
 * @Description TODO
 * @Author 朱福盛
 * @Date 2021/3/25 16:15
 * @Version 1.0
 */

mapboxgl.accessToken = 'pk.eyJ1IjoicGFuamlhbndlbiIsImEiOiJjamh2Y2QyOHcweHMzM3F0YzZxbXp2MHZxIn0.GXyyIbdELQWVH93B27FbnQ';
var tileset = 'mapbox.streets';
var map = new mapboxgl.Map({
    container: 'map',
    zoom: 15,
    center: [116.81943,32.67051],
    style: 'mapbox://styles/mapbox/streets-v9',
});

map.on('load', function loaded() {
    map.addSource('polygon', {
        'type': 'vector',
        'tiles': ['http://localhost:8000/getTiles/polygon/{z}/{x}/{y}']
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
            "fill-color": "#088",
            "fill-opacity": 0.8,
        }
    });
});