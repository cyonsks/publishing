const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/sapsal24/dist')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/sapsal24/dist/index.html"));
})

app.listen(8001, () => {
    console.log('http://localhost:8001 에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
  응답.send('hello world')
}) 