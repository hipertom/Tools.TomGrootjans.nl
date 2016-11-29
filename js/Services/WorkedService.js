function WorkedServiceFun($http, apiEndpoint) {
    "use strict";
    this.items = new Array();

    this.GetItems = function (cb) {

        $http.get(apiEndpoint + 'hours', window.configHeader)
            .then(
                function (response) { // correct
                    var tempResponse = response.data;
                    tempResponse.sort(SortOnDate);
                    return cb(null, sortMore(tempResponse));
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    return cb(response.status, null);
                });
    }

    this.addItem = function (obj) {


        $http.post(apiEndpoint + 'hours/new', obj, window.configHeader).then(
            response => {
                Object.assign(obj, {
                    id: parseInt(response.data, 10)
                });
                this.items.push(obj);
                this.items.sort(SortOnDate);

            },
            err => console.log(err)
        );
    }

    this.removeItem = function (id) {

        const deletion = $http.delete(`${apiEndpoint}hours/delete/${id}`, window.configHeader).then(
            response => {
                this.items.forEach((item, index) => {
                    if (item.id === id) {
                        this.items.splice(index, 1);
                    }
                });
            },
            err => console.log(err)
        );

    }

}

function SortOnDate(a, b) {
    var aDate = new Date(a.year + "-" + a.month + "-" + a.date).getTime();
    var bDate = new Date(b.year + "-" + b.month + "-" + b.date).getTime();
    return ((aDate < bDate) ? -1 : ((aDate > bDate) ? 1 : 0));
}

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