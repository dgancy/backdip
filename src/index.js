//dipdb1
// create the connection to database
//login

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dipdb1',
  password: "Admin123!"
});

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/login/name/:name/password/:password', (req,res) => {
  connection.query(`select * from users where UserPassword = '${req.params['password']}' `, (err,result,fields) => {
    if (result.length != 0) {
      res.send(result)
    } else {
      res.send('Rossz jelszó')
    }
  })
})

app.get('/mistakeUpdate/userID/ID/:id/mistakes/:mistakes', (req,res) => {
  connection.query(`update users set UserMistakes='${req.params['mistakes']}' where UserID = '${req.params['UserID']}'`, (err,result,fields) => {
    if (err) {
      res.send(err)
    }
  })
})