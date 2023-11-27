const express = require('express');
const pets = require("./data.cjs");
const app = express();

const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/api/v1/pets', function (req, res) {
  res.send(pets)
});


app.get('/api/v1/pets/:name', (req, res) => {
  const oneName=req.params.name.toLowerCase();
  const petByName = pets.filter((pet) => pet.name.toLowerCase().match( oneName));
  res.send(petByName);
});


app.get('/api/v1/pets/?owner', (req, query) => {
const userOwner = req.params.owner.toLowerCase();
const petByOwner = pets.filter((pet) => pet.owner.toLowerCase().match(userOwner));
res.send(petByOwner);

});



app.listen(PORT, () =>{ console.log(`server is running on port: ${PORT}` )});