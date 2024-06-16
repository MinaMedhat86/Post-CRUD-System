import mysql from "mysql2"

const connection = mysql.createConnection({
    host : "boknehwddzedvor7w67d-mysql.services.clever-cloud.com",
    user : "uf8lhvuz8drkvnkd",
    database : "boknehwddzedvor7w67d",
    password : "YJKMebrefyIDV8rbQuZi"
})

connection.connect((err)=>{
    if (err){
        console.log (err);
    }else {
        console.log("success");
    }
})

export default connection;