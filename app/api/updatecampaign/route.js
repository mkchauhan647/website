import mysql from 'mysql2';
// import { NextApiRequest, NextApiResponse } from 'next';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mroot',
    database: 'fundraiser',
  });

export async function PUT(req, res) {


  try {
    const { fundid, title, description, category, goalamount, enddate } = await req.json();
    console.log(fundid);
    const query = `UPDATE fundraisers SET title = ?, description = ?, category = ?, goalamount = ?, enddate = ? WHERE fundid = ?`;
    const [result] = await connection.promise().query(query, [title, description, category, goalamount,enddate, fundid]);

    // res.status(200).json({ message: 'Campaign updated successfully' });
     return new Response(JSON.stringify({ message: 'Campaign updated successfully' }),{status:200});
  } catch (error) {
    console.error('Error updating campaign:', error);
    // res.status(500).json({ error: 'Internal server error' });
    return new Response(JSON.stringify({ message: 'Internal server Error please try again later' }),{status:500});

  }
}
