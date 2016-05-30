(function () {
    angular
        .module('UploadForm')
        .factory('WebserviceFactory', WebserviceFactory);

    function WebserviceFactory ($http, appConfig, formDataObject) {
        "ngInject";
        
        /**
         * posts form to rest service
         * @param data
         * @returns {promise} Object
         */
        this.postUploadForm  = function (data) {
            var postData = formDataObject(data);

            return $http.post('/upload', postData, {
                "Accept": "application/json",
                "headers": {
                    "Content-Type": undefined
                },
                "transformRequest": angular.identity
            });
        };

        return this;
    }
}());