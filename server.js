var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'xyz123',
  database : 'test'
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  console.log('The solution is: ', rows[0].solution);
});
 
connection.end();