require("dotenv").config();
const express = require("express");
const public = express();
const api = express();
const router = express.Router();
const middleware = require("./middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const publicPort = process.env.PUBLIC_PORT || 80;
const apiPort = process.env.API_PORT || 3000;

public.listen(publicPort, () => {
  const timestamp = new Date().toUTCString();
  console.log(`${timestamp} - Public server running on port ${publicPort}`);
});

public.use(express.static("public"));

api.listen(apiPort, () => {
  const timestamp = new Date().toUTCString();
  console.log(`${timestamp} - API server running on port ${apiPort}`);
});

api.all("*", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

router.get("/random", middleware.getRandomQuote);
router.get("/random/:num", middleware.getNumRandomQuotes);
router.get("/quotes/:id", middleware.getQuotes);
router.get("/count", middleware.getNumQuotes);

api.get("/", function(req, res) {
  res.send(
    `Welcome to the Michael Scott HTTP API. Please refer to 
    <a href="http://github.com/dangpg/micheal-scott-quotes">http://github.com/dangpg/micheal-scott-quotes</a> 
    or visit the <a href="/v1/swagger">Swagger documentation</a>
    for more information on how to retrieve data.`
  );
});

api.use("/v1", (req, res, next) => {
  const timestamp = new Date().toUTCString();
  console.log(`${timestamp} - Request to ${req.path}`);
  next();
});

api.use("/v1/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
api.use("/v1", router);
