//dipdb1
// create the connection to database
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

app.get('/', (req, res) => {
  res.send('Hello World!')
  connection.query("select 1" , (err, results, fields) => {
    console.log(results);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



