const express = require('express')
const app = express()

// 1. 导入解析表单数据的中间件 body-parser
const bodyParser = require('body-parser')

// 通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
// app.use(express.urlencoded({ extended: false }))

// 2. 使用 app.use() 注册中间件
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/book', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('running……')
})
