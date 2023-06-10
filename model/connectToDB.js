// import mysql from 'mysql2'
// const mysql = require('mysql2');
import mysql from 'mysql2';

const connectToDB = () => {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fundraiser',
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
  });

  return con;
};

// const query = ({query,values=[]}) => {

//   const db = connectToDB();

//     // db.
// }

// db = connectToDB();

// console.log("Hello",db);

// export default connectToDB
module.exports = connectToDB;
// export default connectToDB;
