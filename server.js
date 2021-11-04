'use strict';

const compression = require('compression');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(compression());
app.use(cors());

// comment out cors above and uncomment below
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.static(`${__dirname}/dist`));

app.get('/*', function(req, res) {   
  res.sendFile(path.join(__dirname, '/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});