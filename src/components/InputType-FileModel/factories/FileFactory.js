(function () {
    'use strict';

    angular
        .module('InputType.FileModel')
        .factory('FileFactory', FileFactory);

    FileFactory.$inject = ['$parse'];

    function FileFactory($parse) {

        /**
         * checks combined file size
         * @param files
         * @param maxFileSize
         * @returns {boolean}
         */
        this.checkFileSizes = function (files, maxFileSize) {
            var fileSizes = 0;

            for (var i = 0; i < files.length; i++) {
                // add to fileSize
                fileSizes = + fileSizes + files[i].size;
            }
            return fileSizes < maxFileSize;
        };

        /**
         * checks all files for extensions that are not allowed
         * @param files
         * @param allowedExtensions
         * @returns {Array}
         */
        this.checkFileTypes = function (files, allowedExtensions) {
            var results = [];

            for (var i = 0; i < files.length; i++) {
                var extensionSplit = files[i].type.split('/');

                if( allowedExtensions.search(extensionSplit[1]) === -1 && extensionSplit[0] !== 'image' && allowedExtensions.search('image/*') !== -1 ) {
                    results.push({
                        file: files[i],
                        fileType : extensionSplit[1],
                        allowed: false
                    });
                }
                else if ( allowedExtensions.search(extensionSplit[1]) === -1 && extensionSplit[0] !== 'image' ) {
                    results.push({
                        file: files[i],
                        fileType : extensionSplit[1],
                        allowed: false
                    });
                }
                else {
                    results.push({
                        file: files[i],
                        fileType : extensionSplit[1],
                        allowed: true
                    });
                }
            }

            return results;
        };

        return this;
    }
}());
