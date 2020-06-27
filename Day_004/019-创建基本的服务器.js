// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例
const app = express()

// 导入中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 导入路由模块
const router = require('./020-apiRouter')
// 把路由模块，注册到 app 上
app.use('/api', router)

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(3000, () => {
  console.log('running……')
})
