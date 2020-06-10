// 当外界使用 require 导入一个自定义模块的时候，得到的成员，就是模块中，通过 module.exports 指向的那个对象
// console.log(module)

// 向 module.exports 对象上挂载 username 属性
// module.exports.username = 'zs'

// 向 module.exports 对象上挂载 sayHello 方法
// module.exports.sayHello = function () {
//   console.log('Hellp')
// }

// 使用 module.exports 指向一个全新的对象
// module.exports = {
//   username: '小黑',
//   sayHi() {
//     console.log('小黑')
//   }
// }

// exports.username = 'zs'

// exports.sayHello = function () {
//   console.log('Hellp')
// }

// module.exports.username = 'Tom'

// exports.gender = '男'

exports = {
  gender: '男',
  age: 22
}

module.exports = exports
module.exports.username = 'Tom'
