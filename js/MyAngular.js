(function(angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial', 'ngRoute', 'ngAnimate'])
        .controller('myController', AppController)
        .controller('hourcounterController', hourcounterController)
        .controller('addHoursController', addHoursController)
        .service('workedService', workedServiceFun)
        .config(['$routeProvider', RouteController]);

    function workedServiceFun($http) {
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

    function RouteController($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "all.html"
            })
            .when("/favorite", {
                templateUrl: "favorite.html"
            })
            .when("/all", {
                templateUrl: "all.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            })
            .when("/item/hourcounter", {
                templateUrl: "items/hourcounter.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            })
            .when("/settings", {
                templateUrl: "settings.html"
            });
    }

    function AppController($scope, $mdDialog, $timeout, $mdSidenav, $http) {

        $scope.showDialog = showDialog;
        $scope.goBack = function() {
            window.history.back();
        };

        $http.get(sidebarURL)
            .then(function(response) {
                $scope.sidebarMenu = response.data;
            });
        $http.get(tilesURL)
            .then(function(response) {
                $scope.items = response.data;
            });

        // $scope.sidebarMenu = ajaxGet(sidebarURL);
        // $scope.items = ajaxGet(tilesURL);


        $scope.currentContent = 'all';
        $scope.favorite = [];
        $scope.addFav = function(item) {
            if ($.inArray(item, $scope.favorite)) {
                console.log("item is in");
                $scope.favorite = $.grep($scope.favorite, function(n) {
                    return (n !== item);
                });
            } else {
                console.log("added item");
                $scope.favorite.push(item);
            }
        };
        $scope.toggleSidebar = function() {
            $mdSidenav('sidebar').toggle();
        };
        $scope.closeSidebar = function() {
            $mdSidenav('sidebar').close();
        };
        $scope.changeContent = function(view) {
            $scope.currentContent = view;
        };

        function showDialog($event, title, filename) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'dialog/master.html',
                clickOutsideToClose: true,
                escapeToClose: true,
                fullscreen: true, // Only for -xs, -sm breakpoints.
                locals: {
                    title: title,
                    filename: filename
                },
                controller: DialogController
            });

            function DialogController($scope, $mdDialog, title, filename) {
                $scope.title = title;
                $scope.filename = filename;

                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
    }

    function hourcounterController($scope, $http, workedService) {
        workedService.GetItems(function(err, result) {
            if (err) throw err;
            $scope.worked = result;
        });
    }

    function addHoursController($scope, $http, $mdDialog, $route, workedService) {
        $scope.startTimes = ["09:30", "12:00", "17:00"];
        $scope.endTimes = ["17:00", "17:30", "21:00"];
        var weekday = new Array(7);
        weekday[0] = "Zondag";
        weekday[1] = "Maandag";
        weekday[2] = "Disndag";
        weekday[3] = "Woensdag";
        weekday[4] = "Donderdag";
        weekday[5] = "Vrijdag";
        weekday[6] = "Zaterdag";

        $scope.saveHours = function() {
            var data = $scope.FormData;

            var tempObj = {
                day: data.date.getDay(),
                date: data.date.getDate(),
                month: data.date.getMonth(),
                year: data.date.getFullYear(),
                start: data.start,
                end: data.end,
                pauze: data.pauze
            };

            workedService.AddItem(tempObj, function (err, result) {
                console.log(result);
            })
            $mdDialog.hide();
        };


    }
})(angular);

function filePath(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].filename = "items/" + items[i].filename + ".temp.html";
    }

    return items;
}
