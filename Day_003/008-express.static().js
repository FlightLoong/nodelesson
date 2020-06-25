// 1.导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use(express.static('public'))

// 3. 调用 app.listen(端口号, 启动后的回调函数), 启动服务器
app.listen(3000, () => {
  console.log('running……')
})
