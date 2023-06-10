import connectToDB from '@model/connectToDB';

const connection =connectToDB();

export  async function GET(req, res) {


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
