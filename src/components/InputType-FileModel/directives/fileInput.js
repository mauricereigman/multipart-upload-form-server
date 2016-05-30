(function () {
    'use strict';

    angular
        .module('InputType.FileModel')
        .directive('inputTypeFile', inputTypeFile);
    
    function inputTypeFile(FileFactory, $parse) {
        return {
            restrict: 'AE',
            scope: {
                fileModel: '='
            },
            templateUrl: 'components/InputType-FileModel/templates/input-type-file.html',
            link: function($scope, $element, $attrs) {

                var maxFileSize = $attrs.maxFileSize || 1000000;// default file size or set given file size trhough "max-file-size"
                var allowedExtensions = $attrs.allowedExtensions || "ALL";// default extension support is ALLOW ALL
                var input = $element.find('input');

                var modelSetter = $parse($attrs.fileModel).assign;

                input.bind('change', function () {
                    $scope.$apply(function(){
                        var files = input[0].files;
                        var errorMessage = null;
                        var fileTypeValidations = FileFactory.checkFileTypes(files, allowedExtensions);

                        if (!FileFactory.checkFileSizes(files, parseInt(maxFileSize))) {
                            errorMessage = "De totale bestandsgroote is te groot";
                        }
                        for (var i = 0; i < fileTypeValidations.length; i++) {
                            if (fileTypeValidations[i].allowed === false) {
                                errorMessage = "Het bestand " + fileTypeValidations[i].name + " van type" + fileTypeValidations[i].type  + "is niet toegestaan. De toegestaance formaten zijn een van de volgende extensies: " + allowedExtensions;
                            }
                        }

                        // set and delete error message
                        if (errorMessage) {
                            // set validation message
                            input[0].setCustomValidity(errorMessage);
                        }
                        else {
                            // no validation message
                            input[0].setCustomValidity("");
                        }

                        $scope.fileModel = input[0].files;
                    });
                });

            }
        };
    }
}());