function UserService($http, apiEndpoint) {
    "use strict";
    this.status = false;

    this.getStatus = function (cb) {
        var rest = this;
        $http.get(apiEndpoint + 'user/status', window.configHeader)
            .then(
                function (response) { // correct
                    var data = response.data;
                    rest.items = data;
                    return cb(null, data);
                },
                function (response) { // error
                    console.log("Failed: " + response);
                    return cb(response.status, null);
                });
        return rest;
    }


}

