const express = require('express');
const bodyParser = require('body-parser');

const createUser = require('./userService');

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send("hello");
});

app.post('/signup', (req,res) => {
  createUser(req.body.email, req.body.email, (err,userRecord) => {
    if(err) {
      res.sendStatus(500)
    }else {
      res.json(userRecord);
    }
  });
});

app.listen(8080, () => {
  console.log('server listening at port 8080');
});
