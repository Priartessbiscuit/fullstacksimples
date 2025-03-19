const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tasks_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("Conectado ao MySQL!");

    // Criando tabela se não existir
    connection.query(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            description VARCHAR(255) NOT NULL
        )
    `);
});

module.exports = connection;