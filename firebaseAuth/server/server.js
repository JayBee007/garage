const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log('server listening at port 8080');
});
