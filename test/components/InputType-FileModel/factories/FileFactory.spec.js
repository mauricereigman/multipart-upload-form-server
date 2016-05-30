describe("Testing FileFactory", function () {

    beforeEach(module('InputType.FileModel'));

    var FileFactory;

    beforeEach(inject(function (_FileFactory_) {
        FileFactory = _FileFactory_;
    }));
    

    describe('testing checkFileSizes', function () {
        it('should return false is file size is to big', function () {
            var files = [
                {size: 100000}
            ];
            var maxFileSize = 200;

            expect(FileFactory.checkFileSizes(files, maxFileSize)).toEqual(false);
        });

        it('should return true if file size is OK', function () {
            var files = [
                {size: 200}
            ];
            var maxFileSize = 100000;

            expect(FileFactory.checkFileSizes(files, maxFileSize)).toEqual(true);
        });
    });

    describe('testing checkFileTypes()', function () {

        it('should return true if file type is OK', function () {
            var files = [
                {type: "image/png"}
            ];
            var allowedExtensions = "pdf/image";

            expect(FileFactory.checkFileTypes(files, allowedExtensions)[0].allowed).toEqual(true);
        });

        it('should return false if file type is NOT OK', function () {
            var files = [
                {type: "application/x-msdownload"}
            ];
            var allowedExtensions = "pdf/image";

            expect(FileFactory.checkFileTypes(files, allowedExtensions)[0].allowed).toEqual(false);
        });
    });


});