const mysql = require("mysql2");

const pool = mysql.createPool({
host: "localhost",
user: "root",
password: "admin",
database: "academia"
});

module.exports = pool.promise();