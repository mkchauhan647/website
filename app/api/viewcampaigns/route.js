import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mroot',
    database: 'fundraiser',
  });

export  async function GET(req, res) {
//   if (req.method !== 'GET') {
//     res.status(405).json({ error: 'Method Not Allowed' });
//     return;
//   }

  try {
    const query = `SELECT * FROM fundraisers`;
    const [rows] = await connection.promise().query(query);

    // res.status(200).json({ campaigns: rows });
    return new Response(JSON.stringify({campaigns:rows}),{status:200})
  } catch (error) {
    console.error('Error retrieving campaigns:', error);
    // res.status(500).json({ error: 'Internal server error' });
    return new Response(JSON.stringify("Internal server error"),{status:500})
  }
}
