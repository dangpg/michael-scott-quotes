require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const middleware = require('./middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  const timestamp = new Date().toUTCString();
  console.log(`${timestamp} - Server running on port ${port}`);
});

app.all('*', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/random', middleware.getRandomQuote);
router.get('/random/:num', middleware.getNumRandomQuotes);
router.get('/quotes/:id', middleware.getQuotes);
router.get('/count', middleware.getNumQuotes);

router.get('/', function(req, res) {
    res.send(
      `Welcome to the Michael Scott HTTP API. Please refer to 
      <a href='http://github.com/dangpg/michael-scott-quotes'>http://github.com/dangpg/michael-scott-quotes</a> 
      or visit the <a href='/v1/swagger'>Swagger documentation</a>
      for more information on how to retrieve data.`
    );
})

app.use('/', express.static(__dirname + '/public'));

app.use('/v1', (req, res, next) => {
  const timestamp = new Date().toUTCString();
  console.log(`${timestamp} - Request to ${req.path}`);
  next();
});

app.use('/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/v1', router);
