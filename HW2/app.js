const express = require('express');
const errorHandler = require('./middlewares/error-handler.middleware');
const citiesController = require('./cities/cities.controller');
const app = express();
const port = 3000;

app.use('/cities', citiesController);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(port, () => {
  console.log(`My app is running on port ${port}`)
})

app.use(errorHandler);