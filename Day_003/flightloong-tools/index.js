// 包的入口文件

const date = require('./dateFormat')
const escape = require('./htmlEscape')

// 向外暴露需要的成员
module.exports = {
  ...date,
  ...escape
}
