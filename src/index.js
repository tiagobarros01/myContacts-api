const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const SERVER_PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(SERVER_PORT, () => console.log(`🔥 Server started at http://localhost:${SERVER_PORT}`));
