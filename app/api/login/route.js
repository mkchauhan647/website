import connectToDB from '@model/connectToDB';

const connection = connectToDB();

export async function POST(req, res) {
  //   if (req.method !== 'POST') {
  //     res.status(405).json({ error: 'Method Not Allowed' });
  //     return;
  //   }

  try {
    const { email, password } = await req.json();
    console.log(email);
    console.log(password);
    const query = `SELECT * FROM users WHERE email = ? AND passwords = ?`;
    const [rows] = await connection.promise().query(query, [email, password]);

    if (rows.length === 0) {
      return new Response(JSON.stringify('invaling email or pass'), {
        status: 401,
      });
    }

    const user = rows[0];
    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(JSON.stringify('internal server error'), {
      status: 500,
    });
  }
}

// export async function GET(){

// }
