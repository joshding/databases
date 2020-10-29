var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select * from Messages;', (err, results) => {
      if(err) {
        callback(err);
      } else {
        //console.log('from getAll in models: ', results);
        callback(null, results);
      }
    });


  }, // a function which produces all the messages
  create: function (msg) {
    // make sure to wrap strings in quotes. sometimes must include parseint with integers.
    db.query(`insert into Messages (text) values ('${msg}');`, msg, (err, results) => {
      console.log('post created!');
    });
  } // a function which can be used to insert a message into the database
};
