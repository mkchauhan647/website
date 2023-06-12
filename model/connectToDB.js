import mysql from 'mysql2';
// const mysql = require('mysql2');
// const fs = require('fs');
import fs from 'fs';
const connectToDB = () => {

    const data = {
        host: "myhackmysql.mysql.database.azure.com",
        user: "myhackmysql",
        password: "Azure.c0m",
        database: "fundraiser",
        port: 3306,
        ssl: { ca: fs.readFileSync("/sslca/DigiCertGlobalRootCA.crt.pem") }
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

// connectToDB();
export default connectToDB;