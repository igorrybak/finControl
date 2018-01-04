import * as mysql from 'mysql'

export const mysqlConnect = () => {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'fincontrol',
    password: '',
    database: 'finControl'
  });

  connection.connect();

  connection.query("SHOW TABLES;", (err: any, res: any, fields: any) => {
    if (err) throw err;
    console.log("Database connected, data is " + res);
    // console.log('The solution is: ', results[0].solution);
    // console.log(results);
    // console.log(fields);
  });

  connection.end();
};
