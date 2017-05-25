var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", "pug");

app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/plugins', express.static(__dirname + '/plugins')); // redirect external plugins
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/',function(req, res){

        res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen('8080');