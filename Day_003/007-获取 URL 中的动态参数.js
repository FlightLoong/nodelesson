// 1.导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 注意：这里的 :id 是一个动态的参数
app.get('/user/:id', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也会是一个空对象
  console.log(req.params)
  res.send(req.params)
})

// 3. 调用 app.listen(端口号, 启动后的回调函数), 启动服务器
app.listen(3000, () => {
  console.log('running……')
})
