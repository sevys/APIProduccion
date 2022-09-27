const mysql = require('mysql2')
const config = {
    host: '44.201.120.11',
    user: 'sebas',
    database: 'users',
    password: 'password'
}

const conn = mysql.createConnection(config)

conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully!!!!')
})

module.exports = conn;