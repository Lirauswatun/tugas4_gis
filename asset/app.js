//===================== Layer Group ==============masji
const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const sekolahCluster = new L.markerClusterGroup();
const masjidCluster = new L.markerClusterGroup();
const tokoCluster = new L.markerClusterGroup();
const puskesmasCluster = L.markerClusterGroup();

//===================================================

//====================== icon ====================
const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/pendidikan1.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/ibadah.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'asset/leaflet/images/toko.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'asset/leaflet/images/hospital-building.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



// ===================== Marker ===========================
var masjid = [
    L.marker([-8.677515951059807, 116.38385883520856], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid.png">`),
    L.marker([-8.682469365673192, 116.39268530761792], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid2.jpg">`),
    L.marker([-8.684406024284081, 116.37981123382843], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid3.png">`),
    L.marker([-8.68644459717959, 116.38020377875124], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid4.png">`),
    L.marker([-8.689994358325256, 116.37850259054836], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid5.png">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.676932655098593, 116.38356575237906], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(`SDN NEGERI 1 PENDEM <img src="asset/leaflet/images/sd1.png">`),
    L.marker([-8.671900467057917, 116.37844713188714], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/sma.jpg">`),
    L.marker([-8.681255621199423, 116.39189511535928], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/smp.jpeg">`),
    L.marker([-8.676643363313556, 116.38587104058853], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/mi.png">`),
    L.marker([-8.685773277062644, 116.38537995420967], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/paud.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.675317583548328, 116.38574561175794], { icon: iconpuskesmas }).addTo(puskesmasCluster).bindPopup(` <img src="asset/leaflet/images/puskesmas.jpeg">`),
    L.marker([-8.675503066433745, 116.38196028497936], { icon: iconpuskesmas }).addTo(puskesmasCluster).bindPopup(` <img src="asset/leaflet/images/polindes.jpeg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var toko = [
    L.marker([-8.669194169214569, 116.37810996625676], { icon: iconToko }).addTo(tokoCluster).bindPopup(` <img src="asset/leaflet/images/toko_beson.jpg">`),
    L.marker([-8.673689559035157, 116.37699771720047], { icon: iconToko }).addTo(tokoCluster).bindPopup(` <img src="asset/leaflet/images/toko_beson2.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var streets  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',   
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

const map = L.map('map', {
    center: [-8.805767160537458, 116.4695320549471],
    zoom: 13,
    layers: [satelit, sekolahCluster, masjidCluster, tokoCluster, puskesmasCluster]
});
//========================================================================

//==================== Cluster ===========================================
map.addLayer(sekolahCluster);
map.addLayer(masjidCluster);
map.addLayer(tokoCluster);
map.addLayer(puskesmasCluster);
//======================================================================


const baseLayers = {
     
    'Streers': streets,
    'Satelit': satelit
};

const overlays = {
    'Sekolah': sekolahCluster,
    'Masjid': masjidCluster,
    'Toko': tokoCluster,
    'puskesmas': puskesmasCluster,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(pendem).addTo(map);
