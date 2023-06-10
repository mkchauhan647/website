import connectToDB from '@model/connectToDB';

const connection = connectToDB();

export default async function deleteCampaign(req, res) {
  if (req.method !== 'DELETE') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { fundid } = req.body;
    const query = `DELETE FROM fundraisers WHERE fundid = ?`;
    const [result] = await connection.promise().query(query, [fundid]);

    res.status(200).json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
