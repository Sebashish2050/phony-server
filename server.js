const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocket = require('ws');
const config = require('config');
const cors = require('cors');

const router = require('./router');
const socket = require('./socket');

const port = config.get('port');
const app = express();
const routeBase = '/api/v1';

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

app.use(routeBase, router());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
socket.intializeWebSocket(wss);

const serverSetup = () =>
  server.listen(port, err => {
    if (err) console.error(err);
    console.log(`Ready on port ${port}`);
  });

module.exports = serverSetup;
