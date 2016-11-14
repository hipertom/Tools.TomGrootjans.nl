(function (angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial', 'ngRoute', 'ngAnimate'])
        .controller('myController', AppController)
        .controller('hourcounterController', WorkedHoursController)
        .controller('addHoursController', AddHoursController)
        .service('workedService', WorkedServiceFun)
        .config(['$routeProvider', RouteController])
        .config(['$mdDateLocaleProvider', datepickerConfig]);

    function datepickerConfig($mdDateLocaleProvider) {
        $mdDateLocaleProvider.firstDayOfWeek = 1;
    }

    


})(angular);