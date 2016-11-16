function WorkedServiceFun($http) {
    this.items = new Array();

    this.GetItems = function (cb) {
        var self = this;
        $http.get(tempURL)
            .then(
                function (response) { // correct
                    var tempResponse = response.data;
                    tempResponse.sort(SortOnDate);
                    self.items = tempResponse;
                    return cb(null, response.data);
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    return cb(response.status, null);
                });
        return self;
    }

    this.addItem = function (obj) {
        this.items.push(obj);
        this.items.sort(SortOnDate);

        var myJsonString = angular.toJson(this.items);
        this.updateJson(myJsonString, function (err, result) {
            if (err) throw err;
        });
    }

    this.removeItem = function (id) {
        var temp = this.items;
        var itemID = id;

        $.each(temp, function (i) {
            if (temp[i].id === itemID) {
                console.log("Removing: " + temp[i].id);
                temp.splice(i, 1);
                return false;
            }
        });
        this.items = temp;

        var myJsonString = angular.toJson(this.items);
        this.updateJson(myJsonString, function (err, result) {
            if (err) throw err;
        });
    }


    this.updateJson = function (obj, cb) {
        var self = this;
        $http({
                method: 'POST',
                url: "save.php",
                data: obj,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
            .then(
                function (response) { // correct
                    cb(null, obj);
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    cb(response.status, null)
                }
            );
        return self;
    }
}

function SortOnDate(a, b) {
    var aDate = new Date(a.year + "-" + a.month + "-" + a.date).getTime();
    var bDate = new Date(b.year + "-" + b.month + "-" + b.date).getTime();
    return ((aDate < bDate) ? -1 : ((aDate > bDate) ? 1 : 0));
}