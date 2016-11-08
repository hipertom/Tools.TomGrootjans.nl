var mainURL = "http://127.0.0.1/edsa-Tools.TomGrootjans.nl";
var sidebarURL = mainURL + "/data/sidebar.json";
var tilesURL = mainURL + "/data/tiles.json"
var tempURL = mainURL + "/data/tempworked.json";


var sidebarJson = new XMLHttpRequest();
sidebarJson.open("GET", sidebarURL);
sidebarJson.send();

var tilesJson = new XMLHttpRequest();
tilesJson.open("GET", tilesURL);
tilesJson.send();

var tempJson = new XMLHttpRequest();
tempJson.open("GET", tempURL);
tempJson.send();
