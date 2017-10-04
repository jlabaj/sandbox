var express = require('express');
var path = require('path');
var app = express();
//
require('node-jsx').install();
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('js', path.join(__dirname, 'WebpackClientConfig/assets/main.js'));
//
require('./app/routes/core-routes.js')(app);

/*app.get('/', function (req, res) {
    res.send('Hello World!');
});*/

app.use('/js', express.static(__dirname + '/WebpackClientConfig/assets/'));
app.use('/styles', express.static(__dirname + '/views/css/'));
//app.use(express.favicon(path.join(__dirname, 'public','images','favicon.ico')));
//app.get('/js/main.js',express.static(path.join(__dirname, 'WebpackClientConfig/assets/main.js')));
//Route not found -- Set 404
/*app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});*/

//app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, ,"0.0.0.0");

// app.listen(8000,"127.0.0.1");
