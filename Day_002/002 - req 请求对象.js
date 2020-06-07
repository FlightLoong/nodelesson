// 1. 导入 http 模块
const http = require('http')

// 2. 创建 web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
  // req 是请求对象，它包含了与客户端相关的数据和属性
  // req.url 获取客户端请求的 url 地址
  // req.method 获取客户端请求的类型

  const str = `${req.url} -- ${req.method}`

  console.log(str)
})

// 4. 启动服务器
server.listen(8080, function () {
  console.log('running……')
})
