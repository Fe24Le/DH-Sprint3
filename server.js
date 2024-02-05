// load the things we need
var express = require('express');
var app = express();

//
app.use(express.static('./public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// login page
app.get('/login', function(req, res) {
    res.render('pages/login');
});

// register page
app.get('/register', function(req, res) {
    res.render('pages/register');
});

// register productDetail
app.get('/productDetail', function(req, res) { 
    res.render('pages/productDetail')
});

// register productCart
app.get('/productCart', function(req, res) { 
    res.render('pages/productCart')
});

app.listen(8080);
console.log('8080 puerto usado, Api funcionando');

