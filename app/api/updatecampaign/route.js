import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mroot',
    database: 'fundraiser',
  });

export default async function updateCampaign(req, res) {
  if (req.method !== 'PUT') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { fundid, title, description, category, goalamount, startdate, enddate } = req.body;
    const query = `UPDATE fundraisers SET title = ?, description = ?, category = ?, goalamount = ?, startdate = ?, enddate = ? WHERE fundid = ?`;
    const [result] = await connection.promise().query(query, [title, description, category, goalamount, startdate, enddate, fundid]);

    res.status(200).json({ message: 'Campaign updated successfully' });
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
