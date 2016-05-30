(function () {
    'use strict';
    
    angular
        .module('UploadForm')
        .controller('FormCtrl', FormCtrl);

    function FormCtrl ($scope, WebserviceFactory) {
        $scope.userInput = {};
        $scope.files = {};

        $scope.submitForm = function () {
            WebserviceFactory.postUploadForm($scope.userInput)
                .then(function (response) {
                    console.log(response);
                    _showUploadedPictures(response.data)
                }, function (error) {
                    console.log(error);
                    $scope.error = error;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        function _showUploadedPictures (picturePaths) {
            $scope.files.uploadedFiles = picturePaths;
            //console.log($scope.files.uploadedFiles + 'files');
        }
    }
}());