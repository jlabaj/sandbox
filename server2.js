var express = require('express');
var path = require('path');
var app = express();
//
require('node-jsx').install();
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//
require('./app/routes/core-routes.js')(app);

/*app.get('/', function (req, res) {
    res.send('Hello World!');
});*/


//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

/*var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server = app.listen(port, ipaddress);*/

app.listen(8000,"127.0.0.1");



