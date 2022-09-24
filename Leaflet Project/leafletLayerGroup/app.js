const ankCoor = [39.9398330700786, 32.86537771247409]
//const map = L.map('map').setView(ankCoor, 13);
const map = L.map('map',{
    center:ankCoor,
    zoom:12,
});

//Streetview ekle 
const osm  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

const thunderForest =   L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

//Ank Tarihi Camiler 
const hacıBayramVeliCamiCoor = [39.94453775466719, 32.85800571409867]
const kocatepeCamiCoor = [39.916656819346706, 32.86079876491486]
const tacettinSultanCamiCoor = [39.93268943356009, 32.86519463505488]
const aliSerafettinCamiCoor = [39.93676465365066, 32.865187148542134]
const hacibayram = L.marker(hacıBayramVeliCamiCoor).bindPopup("Hacı bayram Veli Camii"),
kocatepe  = L.marker(kocatepeCamiCoor).bindPopup("kocatepe camii"),
tacettinDergahı = L.marker(tacettinSultanCamiCoor).bindPopup("Tacettin Sultan Camii"),
aliSerafettin  = L.marker(aliSerafettinCamiCoor).bindPopup("Ali Şerafettin Cami")

const ankTarihiCamiler = L.layerGroup([hacibayram,kocatepe,tacettinDergahı,aliSerafettin])
//Ana layerların tanımlanması 
const baseMaps = {
    '<span style="color:orange">OpenStreetMap</span>':osm,
    "<i>Thunder Maps</i>": thunderForest
}
//Yan layerların tanımlanması 
const overlayMaps = {
    "Ankara Tarihi Camiler": ankTarihiCamiler
}
// LAyerların kontrol içinde haritaya üzerine eklenemsi
const layerControl = L.control.layers(baseMaps,overlayMaps).addTo(map)

// Dinamk olarak eklenemsi
//gezdiğim yerler 
const ankamallCoor = [39.95043283342042, 32.83128447985889]
const kentParkCoor = [39.90972144802558, 32.775975302855805]

const  ankamall = L.marker(ankamallCoor).bindPopup("Ankamall Alişveriş Merkezi"),
 kentpark = L.marker(kentParkCoor).bindPopup("KENTPARK Alişveriş Merkezi")
//Dinamikoverlay eklenmesi
 const alisverisMerkezleri = L.layerGroup([ankamall,kentpark])
 layerControl.addOverlay(alisverisMerkezleri,"Alışveriş Merkezleri")

 //Dinamik basemap eklenmesi 

 const sonradaEklenenLayer =  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
layerControl.addBaseLayer(sonradaEklenenLayer,"Dark MAtter")