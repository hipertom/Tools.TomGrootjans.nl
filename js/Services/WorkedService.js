function WorkedServiceFun($http, apiEndpoint) {
    "use strict";
    this.items = new Array();

    this.GetItems = function (cb) {
        var rest = this;
        $http.get(apiEndpoint + 'hours', window.configHeader)
            .then(
                function (response) { // correct
                    var data = response.data;
                    data.sort(SortOnDate);
                    //data = sortMore(data);
                    rest.items = data;
                    return cb(null, data);
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    return cb(response.status, null);
                });
        return rest;
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