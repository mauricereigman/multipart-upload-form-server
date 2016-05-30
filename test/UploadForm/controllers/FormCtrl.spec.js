describe("UploadForm", function () {

    beforeEach(module('UploadForm'));

    var $controller, $httpBackend;

    beforeEach(inject(function(_$controller_, _$httpBackend_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));

    describe('Testing formCtrl', function() {
        it('should set a userInput object', function() {
            var $scope = {};
            $controller('FormCtrl', { $scope: $scope });
            expect($scope.userInput).toEqual({});
        });
    });
});