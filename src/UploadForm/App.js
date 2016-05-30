(function(){
    angular
        .module('UploadForm', ['components']);

    angular
        .module('UploadForm')
        .constant('appConfig', appConfig());

    /**
     * appConfig consist of constants to be used throughout the entire app
     * path: root path for all application recources
     */
    function appConfig() { 
        return {
            'path': 'http://localhost:3000'
        }
    } 
}());
