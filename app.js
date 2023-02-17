const express = require('express');
const app = express();
const data = require('./data.json');

// Optionally - the path module which can be used when setting the absolute path in the express.static function.

app.set('view engine', 'pug');

// use a static route and the express.static method to serve the static files located in the public folder

app.get('/', (req, res) => {
    
})

// app.get('/', (req, res) => {
//     res.render('index', data);
// })

// app.get('/about', (req, res) => {
//     res.render('about', data);
// })

// app.get('/:id', (req, res) => {
//     res.render('about', data);
// })


app.listen('3000', () => { console.log('App is running...')})