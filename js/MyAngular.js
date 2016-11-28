(function (angular, undefined) {
    "use strict";

    angular
        .module('toolsApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngMessages', 'ngAria',])
        .controller('myController', AppController)
        .controller('hourcounterController', WorkedHoursController)
        .controller('addHoursController', AddHoursController)
        .service('workedService', WorkedServiceFun)
        .config(['$routeProvider', RouteController])
        .config(['$mdDateLocaleProvider', datepickerConfig])
        .constant('apiEndpoint', '/edsa-Tools.TomGrootjans.nl/api/')
        .constant('apiEndpointKey', 'supersecretkeyyoushouldnotcommittogithub');

})(angular);