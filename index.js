const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./routes/index');
app.use('/', routes);

app.listen(port);