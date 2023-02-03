const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;


app.use(morgan('dev'));














app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})