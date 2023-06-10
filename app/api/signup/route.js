import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mroot',
    database: 'fundraiser',
  });

export  async function signup(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { email, password } = req.body;
    const query = `INSERT INTO users (email, passwords) VALUES (?, ?)`;
    const [result] = await connection.promise().query(query, [email, password]);

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
