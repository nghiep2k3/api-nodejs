const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, ()=>{console.log(`Đã chạy http://localhost:${port}`);})