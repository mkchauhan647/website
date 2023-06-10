import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mroot',
  database: 'fundraiser',
});

// const userid = getUserId(email);

// console.logj(userid)


export async function POST(req, res) {
  try {
    const { email, title, description, category, goalamount, startdate, enddate } = await req.json();
    // let userid = 2;
    const query = `INSERT INTO fundraisers (email, title, description, category, goalamount, startdate, enddate) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    console.log(query)
    console.log(req.body)
    const [result] = await connection
      .promise()
      .query(query, [
        email,
        title,
        description,
        category,
        goalamount,
        startdate,
        enddate,
      ]);

    // res.status(200).json({ message: 'Campaign started successfully' });
    return new Response(
      JSON.stringify({ message: 'Campaign started succesfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error starting campaign:', error);
    // res.status(500).json({ error: 'Internal server error' });
    return new Response(
      JSON.stringify({ message: 'Campaign started succesfully' }),
      { status: 200 }
    );
  }
}
