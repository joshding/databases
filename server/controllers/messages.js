var models = require('../models');
// this is where we need to call models.messages and models.users. They will be the ones interacting with the database.
// All get requests are requests for all messages?
//used in routes.js as second argument in router.get()
module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('successful post!!: ', res);
    //res.writeHead(200);
    res.send('helloooo');
    res.status(200).end();
  } // a function which handles posting a message to the database
};
