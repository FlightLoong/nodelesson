// 1. 导入 http 模块
const http = require('http')

// 2. 创建 web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
  // res 是响应对象，它包含了与服务器相关的数据和属性
  // 例如：将字符串发送到客户端

  const str = `${req.url} -- ${req.method}`
  
  // res.end() 方法的作用
  // 向客户端发送指定的内容，并结束这次请求的处理过程
})

// 4. 启动服务器
server.listen(8080, function () {  
  console.log('running……')
})
