const quotes = require("./quotes");
const utils = require("./utils");

const middleware = {
  getRandomQuote: function(req, res) {
    const randomQuote = utils.getRandomItem(quotes);
    return res.json(randomQuote);
  },

  getNumRandomQuotes: function(req, res) {
    if (utils.isNaN(req.params.num)) {
      return res.sendStatus(400);
    }
    const num = parseInt(req.params.num, 10);
    if (num >= quotes.length) {
      middleware.getAllQuotes(req, res);
    }

    const clonedQuotes = quotes.slice(0);
    const randomQuotes = utils.getRandomItems(clonedQuotes, num);
    return res.json(randomQuotes);
  },

  getQuotes: function(req, res) {
    if (req.params.id === "all") {
      return res.json(quotes);
    }

    if (utils.isNaN(req.params.id)) {
      return res.sendStatus(400);
    }
    const index = parseInt(req.params.id, 10);
    if (index > quotes.length - 1) {
      return res.sendStatus(404);
    }
    return res.json(quotes[req.params.id]);
  },

  getNumQuotes: function(req, res) {
    return res.send(quotes.length.toString());
  }
};

module.exports = middleware;
