/****** Change ****/
var onServer = false;
/******************/
const mainURL = (!onServer)? "http://127.0.0.1/edsa-Tools.TomGrootjans.nl": "";
const sidebarURL = mainURL + "/data/sidebar.json";
const tilesURL = mainURL + "/data/tiles.json"
const tempURL = mainURL + "/api/workedHours";