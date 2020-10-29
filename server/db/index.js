var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  //password: 'root',
  insecureAuth: true,
  database: 'chat'
});

// connect database server using mysql
dbConnection.connect(function(err) {
  if (err) {
    console.log('error connecting database to server: ', err);
  } else {
    console.log('connected database to server!');
  }
});

module.exports = dbConnection;