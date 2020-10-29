var models = require('../models');
// this is where we need to call models.messages and models.users. They will be the ones interacting with the database.
// All get requests are requests for all messages?
//used in routes.js as second argument in router.get()
module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if(err) {
        res.status(404).send(err);
      } else {
        res.status(201).json(data);
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('successful post in messages!!');
    // we'll need to call models.messages.create so they can query a post into the database.

    models.messages.create({usersid: 1, roomsid: 1, text: req.body.text});
    res.status(200).json(req.body);
  } // a function which handles posting a message to the database
};
