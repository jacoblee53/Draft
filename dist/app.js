var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/lib', express.static(__dirname + '/md'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
    console.log('App is listening at port %d', port);
    console.log('http://localhost:%d', port);
});