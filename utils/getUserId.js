// import MyContext from '@context/MyContext';
// import connectToDB from '@model/connectToDB';
// import { useContext } from 'react';
// // const connection = require('../model/connectToDB');
// const connection = connectToDB();
// const {email} = useContext(MyContext)
// console.log(email)
// const getUserId = async (email) => {
//   const query = `SELECT * FROM users WHERE email = ? `;
//   const [rows] = await connection.promise().query(query, [email]);
//   if (rows.length === 0) {
//     return null;
//   }
//   const user = rows[0];
//   console.log(user);
//   return user.userid;
// };
// export default getUserId;
