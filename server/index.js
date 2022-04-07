const express = require('express')
const app = express()

const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'neo-randstad'
})

// Routes for the app
app.get('/', (req, res) => {
    const sqlInsert = ""
    db.query(sqlInsert, (err, result) => {
        res.send("hello world");
    })
});

app.listen(3001, () => {
    console.log("Run on port 3001");
    console.log("this is a test ");
})

module.exports = db;