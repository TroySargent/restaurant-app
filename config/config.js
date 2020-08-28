const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    const connection = mysql.createConnection(process.env.JAWSDB_URL)  
}
else {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "burgers_db"
    });
};

module.exports = connection;