var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var uploadFolder = './uploads/';

function createFileName(file) {
    var datetimestamp = Date.now();
    return file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/** Serving static files from the same express Server
 to avoid cors */
app.use(express.static('./'));
app.use(bodyParser.json());

/**multer settings*/
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadFolder)
        },
        filename: function (req, file, cb) {
            console.log(file.originalname);
            console.log(file);
            cb(null, file.fieldname + '-' + file.originalname)
        }
    })
});


app.post('/upload', upload.array('attachment'), function(req,res){
    var filePaths = [];

    for (i = 0; i < req.files.length; i++) {
        console.log("storing :" + req.files[i].originalname + " in " + uploadFolder);
        filePaths.push(
            {
                filePath: uploadFolder + req.files[i].fieldname + '-' + req.files[i].originalname
            }
        );
    }

    console.log(filePaths);

    res.send(filePaths);
    res.status(204).end();
});


app.listen('3000', function () {
    console.log('running on 3000...');
});
