var models = require('../models');
// controllers users will call models users so that the models users will add to the database.
module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    console.log('successful post in users!!: ', req.body.text);
    //we'll probably need to call our post function from users.js in models. input req.whatever the input was
    models.users.create({name: req.body.text});
    res.status(200).json(req.body);
  }
};
