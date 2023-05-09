const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
// const bodyParser = require('body-parser')

/* config body-parser */
// app.use(bodyParser.json())

app.get('/board',(req,res)=>{
    console.log('/board')
    db.query("select * from board",(err,data)=>{
        if(!err){
            //console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/board/write',(req,res)=>{
    console.log('/board/write')
    const title = req.params.title
    const contents = req.params.contents
    const author = req.params.author
    db.query(`INSERT INTO board(title,contents,author)VALUES('${title},${contents},${author}')`)
     if(!err){
        res.send(data)
     }else{
        console.log(err)
     }
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})