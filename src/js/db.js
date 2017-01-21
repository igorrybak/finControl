let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database : 'finControl'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  console.log(results);
  console.log(fields);
});

connection.end();