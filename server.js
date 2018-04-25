const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const data = require('./src/mockups/products.json');

app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.status(200).send(data);  
});

app.listen(port, () => console.log(`Listening on port ${port}`));