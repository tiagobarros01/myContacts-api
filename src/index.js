const express = require('express');

require('express-async-errors');

const routes = require('./routes');

const SERVER_PORT = 3001;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  next();
});

app.use(routes);

app.use((error, req, res, next) => {
  console.log('#### Error handler');
  console.log(error);

  res.sendStatus(500);
});

app.listen(SERVER_PORT, () => console.log(`🔥 Server started at http://localhost:${SERVER_PORT}`));
