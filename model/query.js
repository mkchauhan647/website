


const db = require('./connectToDB')


const query =  () => {

    const dbinstance = db();

    // dbinstance.connect()

    dbinstance.query('select * from users',(error,result)=>{
        if(error){
            console.log("Error occured")
        }
        console.log("Result ",result)
    })


}

query();
