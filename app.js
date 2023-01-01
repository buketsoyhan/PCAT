const express = require('express');
const { default: mongoose } = require('mongoose');
const { execArgv } = require('process');
const ejs = require('ejs');
const app = express();

const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');
// MIDDLE WARES
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(fileUpload());

app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
// ROUTES
app.get('/', photoControllers.getAllPhotos);
app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server started on ${port} port`);
});
