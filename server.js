const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const cors = require("cors");
const server = express();
const port = process.env.PORT || 5000;


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

require('./api/config/routes/routes')(server);
server.use(express.static(path.join(__dirname, './client/build')));

server.listen(port, () => console.log(`Listening on port ${port}`));