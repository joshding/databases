var models = require('../models');
// controllers users will call models users so that the models users will add to the database.
module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    console.log('successful post!!: ', res);
    //res.writeHead(200);
    res.send('helloooo');
    res.status(200).end();
  }
};
