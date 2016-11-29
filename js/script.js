/****** Change ****/
var onServer = false;
/******************/
const mainURL = (!onServer)? "http://127.0.0.1/edsa-Tools.TomGrootjans.nl": "";
const sidebarURL = mainURL + "/data/sidebar.json";
const tilesURL = mainURL + "/data/tiles.json"
const tempURL = mainURL + "/api/workedHours";


const monthsFull =
["januari", "februari", "maart", "april", "mei", "juni", "july", "augustus", "september", "oktober", "november", "december"];

const monthsShort =
["jan","feb","mrt","apr","mei","jun","jul", "aug","sep","okt","nov","dec"];

const daysFull = 
["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

const daysShort = 
["zo", "ma", "di", "wo", "do", "vr", "za"];