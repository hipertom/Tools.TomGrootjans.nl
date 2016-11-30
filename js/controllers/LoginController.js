function LoginController($scope, $rootScope) {
    
    $scope.formSubmit = function () {
        $rootScope.loginStatus = true;
    }    

}