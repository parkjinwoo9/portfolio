
var mysql = require('mysql')
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'react_board_db',
    port:3306,
})
module.exports=db;