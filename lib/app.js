const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/zodiac', require('./controllers/zodiac'));

app.use('/', (req, res) => {
  res.send('hello world!');
});

app.listen(3000, () => {
  console.log('server started');
});

module.exports = app;
