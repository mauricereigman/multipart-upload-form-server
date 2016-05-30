(function () {
    'use strict';
    
    angular
        .module('UploadForm')
        .controller('FormCtrl', FormCtrl);

    function FormCtrl ($scope, WebserviceFactory) {
        $scope.userInput = {};
        $scope.files = {};

        $scope.submitForm = function () {
            console.log('submitting form');
            WebserviceFactory.postUploadForm($scope.userInput)
                .then(function (response) {
                    console.log(response);
                    showUploadedPictures(response.data)
                }, function (error) {
                    console.log(error);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        function showUploadedPictures (picturePaths) {
            $scope.files.uploadedFiles = picturePaths;
            console.log($scope.uploadedFiles);
        }
    }
}());