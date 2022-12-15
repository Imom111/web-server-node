const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Ivan',
    tema: 'Curso',
  });
})


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Ivan',
    tema: 'Curso',
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Ivan',
    tema: 'Curso',
  });
})

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname  + '/public/elements.html')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname  + '/public/generic.html')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
