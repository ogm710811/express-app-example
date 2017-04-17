
const express = require('express');
const app = express();

// public folder reference
app.use(express.static('public'));
// set view of static pages
app.set('view engine', 'ejs');

// routers
app.get('/home', (request, response, next) => {
    console.log('HOME PAGE');

    response.render('home.ejs');
});

app.get('/personal-information', (request, response, next) => {
    console.log('PERSONAL INFORMATION PAGE');

    response.render('personal-information.ejs');
});

app.get('/club-career', (request, response, next) => {
    console.log('CLUB CAREER');

    response.render('club-career.ejs');
});

app.get('/gallery', (request, response, next) => {
    console.log('GALLERY');

    response.render('gallery.ejs');
});

app.listen(3000);