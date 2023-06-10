import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mroot',
    database: 'fundraiser',
  });

export  async function POST(req, res) {
  

  try {
    const { userid, title, description, category, goalamount, startdate, enddate } = req.body;
    const query = `INSERT INTO fundraisers (userid, title, description, category, goalamount, startdate, enddate) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await connection.promise().query(query, [userid, title, description, category, goalamount, startdate, enddate]);

    // res.status(200).json({ message: 'Campaign started successfully' });
    return new Response(JSON.stringify({message:'Campaign started succesfully'}),{status:200});
  } catch (error) {
    console.error('Error starting campaign:', error);
    // res.status(500).json({ error: 'Internal server error' });
    return new Response(JSON.stringify({message:'Campaign started succesfully'}),{status:200});

  }
}
