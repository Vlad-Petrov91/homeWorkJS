
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/catalog', (req, res) => {
   fs.readFile('./data/catalog.json', 'utf8', (err, text) => {
      res.send(text);
   })
})

app.get('/cart', (req, res) => {
   fs.readFile('./data/cart.json', 'utf8', (err, text) => {
      res.send(text);
   })
})

app.post('/cart', jsonParser, (req, res) => {

   fs.readFile('./data/cart.json', 'utf8', (err, data) => {
      let cart = JSON.parse(data);
      cart = req.body

      fs.writeFile('./data/cart.json', JSON.stringify(cart), () => {
         res.end();
      })

   });
})

app.listen(port, jsonParser, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})