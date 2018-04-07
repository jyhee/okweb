var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '52.78.25.16',
  user     : 'devuser',
  password : 'devpass',
  database : 'devdb'
});

connection.connect();

connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].userid);
});

connection.end();