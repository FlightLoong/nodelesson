// 1.导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

app.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的，查询参数
  // 注意：默认情况下， req.query 是一个空对象
  console.log(req.query)
  res.send(req.query)
})

// 3. 调用 app.listen(端口号, 启动后的回调函数), 启动服务器
app.listen(3000, () => {
  console.log('running……')
})
