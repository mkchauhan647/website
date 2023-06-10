import connectToDB from '@model/connectToDB';
import url from 'url'
const connection = connectToDB();

export async function DELETE(req, res) {


  try {
    const parsedUrl = url.parse(req.url, true);
   const queryParams = parsedUrl.query;
  //  console.log(queryParams.fundid)
    const query = `DELETE FROM fundraisers WHERE fundid = ?`;
    const [result] = await connection.promise().query(query, [queryParams.fundid]);

    return new Response(JSON.stringify({message: 'Campaign deleted successfully'}), {
      status: 200
    })
    // res.status(200).json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    // res.status(500).json({ error: 'Internal server error' });
    return new Response(JSON.stringify({message: 'Error deleting campaign'}), {
      status: 500
    })
  }
}
