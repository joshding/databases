var db = require('../db');

module.exports = {
  getAll: function () {},
  create: function (username) {
    // we'll need to db.query
    const queryString = 'INSERT INTO Users SET ?';
    db.query(queryString, username, function(err, results) {
      console.log('error: ', err);
      console.log('username created!');
    });
  }
};
