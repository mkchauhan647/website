import connectToDB from '@model/connectToDB';
const connection = connectToDB();

// const userid = getUserId(email);

// console.logj(userid)


export async function POST(req, res) {
  try {
    const { email, title, description, category, goalamount, startdate, enddate } = await req.json();
    // console.log(await req.json())
    // let userid = 2;
  let goalamountNum = parseInt(goalamount)

    console.log(goalamountNum, goalamount);
    const query = `INSERT INTO fundraisers (email, title, description, category, goalamount, currentamount, startdate, enddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    // console.log(query)
    // console.log(req.body)
    console.log(startdate)
    console.log(goalamount)
    const [result] = await connection
      .promise()
      .query(query, [
        email,
        title,
        description,
        category,
        goalamountNum,
        0,
        startdate.slice(0,10),
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
