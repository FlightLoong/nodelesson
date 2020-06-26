const express = require('express')
// 创建 web 服务器，命名为 app
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('Hello, World')
})

app.post('/', (req, res) => {
  res.send('Hello, Tom')
})

app.listen(3000, () => {
  console.log('running……')
})
