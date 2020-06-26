const qs = require('querystring')

const bodyParser = (req, res, next) => {
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
}

module.exports = bodyParser
