import connectToDB from "@model/connectToDB";

export const POST = async (req, res) => {
  const { email, password } = await req.json();

  console.log(email);
  console.log(password);

  const dbInstance = connectToDB();

  try {
    const result = await new Promise((resolve, reject) => {
      dbInstance.query(
        `SELECT * FROM users WHERE email= ? and password= ?`,[email,password],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log(result[0].password)
    if (result.length > 0) {
        if(result[0].password === password){
          return new Response(
            JSON.stringify("The user with this email already exists"),
            { status: 200 })
        }
     
      return new Response(JSON.stringify("The email or password doesn't match"),{status:401})
    } else {
      // await new Promise((resolve, reject) => {
      //   dbInstance.query(
      //     `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`,
      //     (err) => {
      //       if (err) {
      //         console.log(err);
      //         reject(err);
      //       } else {
      //         resolve();
      //       }
      //     }
      //   );
      // });

      return new Response(
        JSON.stringify("Please Signup"),
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
  }

  return new Response(JSON.stringify("User is created successfully"), {
    status: 200,
  });
};
