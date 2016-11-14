(function(angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial', 'ngRoute', 'ngAnimate'])
        .controller('myController', AppController)
        .controller('hourcounterController', WorkedHoursController)
        .controller('addHoursController', AddHoursController)
        .service('workedService', WorkedServiceFun)
        .config(['$routeProvider', RouteController]);

    function WorkedServiceFun($http) {
        this.items = [];
        this.GetItems = function(cb) {
            var self = this;
            $http.get(tempURL)
                .then(
                    function(response) { // correct
                        console.log(response);
                        self.items = response.data;
                        return cb(null, response.data);
                    },
                    function(response) { // error
                        return cb(response.status, null);
                    });
            return self;
        }

        this.AddItem = function(obj, cb) {
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
                    function(response) { // correct
                        console.log("statusText: " + response.statusText);
                        self.items.push(obj);
                        cb(null, obj);
                    },
                    function(response) { // error
                        console.log("Failed: " + response);
                        cb(response.status, null)
                    }
                );
            return self;
        }
    }

    
})(angular);

