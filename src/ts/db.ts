import * as mysql from 'mysql'
// let mysql = require('mysql');

export const mysqlConnect = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'finControl',
    password: '',
    database: 'finControl'
  });

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', (error: any, results: any, fields: any) => {
    if (error) throw error;
    console.log("Database connected, data is " + results);
    // console.log('The solution is: ', results[0].solution);
    // console.log(results);
    // console.log(fields);
  });

  connection.end();

};
