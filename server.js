// load the things we need
var express = require('express');
var app = express();

//
app.use(express.static('./public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "Un Mundo de Juegos";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// login page
app.get('/about', function(req, res) {
    res.render('pages/about');
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

