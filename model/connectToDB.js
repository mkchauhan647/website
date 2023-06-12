// import mysql from 'mysql2';
const mysql = require('mysql2');
const fs = require('fs');
// import fs from 'fs';
// import path from 'path';
const path = require('path');
const filepath = path.join(__dirname, './DigiCertGlobalRootCA.crt.pem')
console.log("hellopath:",filepath);
const connectToDB = () => {

    const data = {
        host: "myhackmysql.mysql.database.azure.com",
        user: "myhackmysql",
        password: "Azure.c0m",
        database: "fundraiser",
        port: 3306,
        ssl: { ca: fs.readFileSync(filepath) }
    }



    try{
        const connection = mysql.createConnection(data);
        connection.connect((err) => {
            if (err) {
                console.log("Error connecting to DB: " + err);
                return;
            }
            console.log("Connection established");
        });
        return connection;
    }
    catch(err){
        console.log("Error connecting to DB: " + err);
    }
}

connectToDB();
// export default connectToDB;