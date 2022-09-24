const ankCoor = [39.9398330700786, 32.86537771247409]
//const map = L.map('map').setView(ankCoor, 13);
const map = L.map('map', {
    center: ankCoor,
    zoom: 12,
});

//Streetview ekle 
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

const myStyle = {
    "color": "#483D8B",
    "weight": 2,
    "opacity": 0.9,
    "filOpacity": 0.2
}
const geojson = L.geoJSON(iller_polygon, {
    style: myStyle,
    onEachFeature: onEachFeature
}).addTo(map)

// Her bir gis logo oluşturulduğunda çalışacak fonksiyon 
L.Control.gisLogo = L.Control.extend({
    onAdd: function (map) {
        const img = L.DomUtil.create('img')
        img.src = 'gis.png',
            img.style.width = '100px'

        return img
    },
    onRemove: function (map) {
        //Control kaldırıldığında yapılacak iişlemler
    }
})
// Komtol eklediğinde çağrılacak fonskyion
L.control.gislogo = function (opts) {
    return new L.Control.gisLogo(opts)
}
// İşlme görmüş controlun map e eklenmesi 
L.control.gislogo({ position: 'bottomleft' }).addTo(map)


// HErnbir feature olşuturulduğunda çağrıalcak fonsksioyn
function onEachFeature(feature, layer) {
    //console.log("Oneachfeature içine girdi");
    layer.on({
        mouseover: sehirSec,
        mouseout: resetSehirSec,
        click: zoomToFeature
    });
};

function sehirSec(e) {
    // console.log("Mouse event tetiklendi");
    const layer = e.target;
    info.update(layer.feature.properties);
    layer.setStyle({
        color: 'red',
        fillOpacit : 0.2
    })
  
}
function resetSehirSec(e){
geojson.resetStyle(e.target)
}
function zoomToFeature(e){

}

//L.control üzerinde GEojson objesindeki verilerin görüntülenmmesi 
const info = L.control();
info.onAdd = function (map){
    //Classı info olan bir div oluştur
    console.log(this);
    this._div = L.DomUtil.create('div','info')
    this.update();
    return this._div
}

info.update = function (props){
    console.log(props);
    this._div.innerText = "ddadasad</h2>"
}

info.addTo(map)