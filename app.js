var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);

app.all('*', (req, res) => {
  return res.status(404).json({error: 'Not found'});
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});