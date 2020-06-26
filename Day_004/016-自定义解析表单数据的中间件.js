// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 4. 导入 Node 内置模块 querystring
const qs = require('querystring')

// 解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间价具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })

  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    console.log(str)
    // 将字符串格式的请求体数据，解析成对象
    // 5. 调用 qs.parse() 方法，将查询字符串解析成对象
    const body =  qs.parse(str)

    // 6. 将解析出来的数据对象挂载为 req.body 属性
    req.body = body
    next()
  })
})

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen方法，指定端口号并启动 web 服务器
app.listen(3000, () => {
  console.log('running……')
})
