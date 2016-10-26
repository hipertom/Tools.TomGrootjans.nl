(function(angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial'])
        .controller('myController', AppController)
        .controller('hourcounterController', hourcounterController);

    function AppController($scope, $mdDialog, $timeout, $mdSidenav) {

        $scope.showDialog = showDialog;
        $scope.sidebarMenu = sidebarMenu;
        $scope.currentContent = 'all';
        $scope.items = filePath(items);
        $scope.toggleSidebar = function() {
            $mdSidenav('sidebar').toggle();
        }
        $scope.closeSidebar = function() {
            $mdSidenav('sidebar').close();
        }
        $scope.changeContent = function(view) {
            $scope.currentContent = view;
        }

        function showDialog($event, item) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'items/maintemplate.html',
                clickOutsideToClose: true,
                escapeToClose: true,
                fullscreen: true, // Only for -xs, -sm breakpoints.
                locals: {
                    item: item
                },
                controller: DialogController
            });

            function DialogController($scope, $mdDialog, item) {
                $scope.item = item;
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
    }

    function hourcounterController($scope) {
        $scope.times = [9.30, 10.00, 10.30];
        $scope.worked = worked;
    }
})(angular);

var sidebarMenu = [{
    title: "Favorite",
    desc: "Wacht all your favored items",
    svg: "favorite",
    link: "favorite"
}, {
    title: "All Items",
    desc: "Browse all the available items",
    svg: "dashboard",
    link: "all"
}, {
    title: "Settings",
    desc: "Wacht all your favorited programs",
    svg: "settings-gear",
    link: "myitems"
}, {
    title: "My Account",
    desc: "Wacht all your favorited programs",
    svg: "account-circle",
    link: "myitems"
}];

var items = [{
    tag: "HC",
    name: "Hour Counter",
    filename: "hourcounter",
    color: "red"
}, {
    tag: "T2",
    name: "Test 2",
    filename: "test2",
    color: "pink"
}, {
    tag: "T3",
    name: "Test 3",
    filename: "test3",
    color: "purple"
}, {
    tag: "T4",
    name: "Test 4",
    filename: "test4",
    color: "yellow"
}, {
    tag: "T5",
    name: "Test 5",
    filename: "test5",
    color: "lime"
}, {
    tag: "T6",
    name: "Test 6",
    filename: "test6",
    color: "orange"
}, {
    tag: "T7",
    name: "Test 7",
    filename: "test7",
    color: "blue"
}, {
    tag: "T8",
    name: "Test 8",
    filename: "test8",
    color: "cyan"
}, {
    tag: "T9",
    name: "Test 9",
    filename: "test9",
    color: "teal"
}, ];

var worked = [{
    day: "Maandag",
    date: "7 juni \'16",
    start: "09:30",
    end: "17:30",
    pauze: true
}, {
    day: "Dinsdag",
    date: "26 oktober \'16",
    start: "09:30",
    end: "17:30",
    pauze: false
}, {
    day: "Woensdag",
    date: "31 december \'16",
    start: "09:30",
    end: "17:30",
    pauze: true
}, {
    day: "Donderdag",
    date: "1 januari \'16",
    start: "16:45",
    end: "21:00",
    pauze: false
}, {
    day: "Vrijdag",
    date: "31 februari \'16",
    start: "12:00",
    end: "17:00",
    pauze: true
}, {
    day: "Zaterdag",
    date: "14 maart \'16",
    start: "09:30",
    end: "17:30",
    pauze: true
}, {
    day: "Zondag",
    date: "1 april \'16",
    start: "99:99",
    end: "99:99",
    pauze: false
}];

function filePath(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].filename = "items/" + items[i].filename + ".temp.html";
    }

    return items;
}
