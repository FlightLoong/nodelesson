// 1. 导入 http 模块
const http = require('http')

// 2. 创建 web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
  // 发送包含中文的内容
  const str = `您请求的 url 地址是：${req.url}，请求的 method 类型是：${req.method}`

  // 为了防止中文乱码问题，需要设置响应头，
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // 把包含中文的内容返回给客户端
  res.end(str)
})

// 4. 启动服务器
server.listen(8080, function () {  
  console.log('running……')
})
