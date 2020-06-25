const itheima = require('./flightloong-tools')

// 格式化时间的代码
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)

// 转义 Html 字符串
const htmlStr = '<h4 title="abc">这是h4标签<span>123&nbsp;</span></h4>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)

// 还原 Html 字符串
const resetHtml = itheima.htmlUnEscape(str)
console.log(resetHtml)
