/* =====================
Leaflet Configuration
===================== */

let mapOpts = {
    center:[29.86045, -95.36978], // set map centered around Houston
    zoom: 10,
    zoomControl: false
  };

let map = L.map('map', mapOpts);

L.control.zoom({
position: 'bottomright'
}).addTo(map);

let tileOpts = {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
};

let Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', tileOpts).addTo(map);
