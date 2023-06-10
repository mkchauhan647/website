const db = require('./connectToDB')



const User = () => {
    const dbinstance = db();
    dbinstance.query()
}