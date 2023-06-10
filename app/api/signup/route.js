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
    const { email, password } = await req.json();
    const query = `INSERT INTO users (email, passwords) VALUES (?, ?)`;
    const [result] = await connection.promise().query(query, [email, password]);

    // res.status(200).json({ message: 'User created successfully' });
    return new Response(JSON.stringify({ message: 'User created successfully' }),{status:200});
  } catch (error) {
    console.error('Error during signup:', error);
    // res.status(500).json({ error: 'Internal server error' });
    return new Response(JSON.stringify({ message: 'Internal server error' }),{status:500});

  }
}
