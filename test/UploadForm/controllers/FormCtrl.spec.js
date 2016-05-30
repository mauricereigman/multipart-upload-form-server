describe("Testing formCtrl", function () {

    beforeEach(module('UploadForm'));

    var $controller, $httpBackend, $scope, $q, WebserviceFactory;

    beforeEach(inject(function (_$controller_, _$httpBackend_, _$rootScope_, _$q_, _WebserviceFactory_) {
        WebserviceFactory = _WebserviceFactory_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $controller('FormCtrl', {$scope: $scope, WebserviceFactory: WebserviceFactory});
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('testing constructor', function () {

        it('should set a userInput object', function () {
            expect($scope.userInput).toEqual({});
            expect($scope.files).toEqual({});
        });
    });

    describe('testing submitform()', function () {

        it('shoulld set $scope.files.uploadedFiles with links to saved images when request is succes', function () {
            var responseObj = [
                {"filePath": "./uploads/attachment-tablet-loader.png"},
                {"filePath": "./uploads/attachment-tablet-loader2.png"}
            ];

            $httpBackend.expectPOST('/upload')
                .respond(200, responseObj);

            $scope.submitForm();
            $httpBackend.flush();

            expect($scope.files.uploadedFiles[0].filePath).toEqual(responseObj[0].filePath);
            expect($scope.files.uploadedFiles[1].filePath).toEqual(responseObj[1].filePath);
        });

        it('should set $scope.error when request failed', function () {
            $httpBackend.expectPOST('/upload')
                .respond(400);

            $scope.submitForm();
            $httpBackend.flush();

            expect($scope.error).not.toEqual(undefined);
        });
    });


});