var express = require('express');
var bodyParser = require('body-parser');
var AipOcrClient = require("baidu-aip-sdk").ocr;
var toc = require('markdown-toc');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/fonts', express.static(__dirname + '/fonts'));


/* Baidu-OCR COONFIG */
var APP_ID = "11352712";
var API_KEY = "ORtoKznqykNXE6rqr7wWli9G";
var SECRET_KEY = "aqUxsH3R1CxiFyjXwL6ad4lEfZsrG3Nd";


var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
var options = {};
options["language_type"] = "CHN_ENG";
options["detect_direction"] = "true";
options["detect_language"] = "true";
options["probability"] = "true";


app.post('/', function (req, res) {

    if (req.body.hasOwnProperty("img")) {
        var imgdata = req.body.img;

        /* OCR */
        client.generalBasic(imgdata, options).then(function (result) {
            // console.log(JSON.stringify(result));
            // console.log(result.words_result);
            res.send(result.words_result);
        }).catch(function (err) {
            console.log("app.js: " + err);
        });
    } else if(req.body.hasOwnProperty("md")) {
        var mddata = req.body.md;
        var TOC = toc(mddata).content;
        res.send({TOC: TOC});
        console.log(TOC);
    }
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, function () {
    console.log('App is listening at port %d', port);
    console.log('http://localhost:%d', port);
});