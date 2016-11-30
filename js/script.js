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


function sortMore(array) {
    var itemArray = array;
    var allyears = [];
    var allmonths = [];

    itemArray.forEach((item, index) => {
        if (allyears.indexOf(item.year) === -1) {
            allyears.push(item.year);
        }

        if (allmonths.indexOf(item.month) === -1) {
            allmonths.push(item.month);
        }
    });

    var newArray = [];

    allyears.forEach((year, index) => {
        newArray[year] = [];
        
        allmonths.forEach((month, index) => {
            newArray[year][month] = [];

        });
    });

    
    itemArray.forEach((item, index) => {
        newArray[item.year][item.month].push(item);
    });

    return newArray;
}