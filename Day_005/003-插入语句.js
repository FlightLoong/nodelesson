// 1. 导入 mysql 模块
var mysql  = require('mysql')
// 2. 建立与 mysql 数据库的连接
var db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的 ip 地址
  user: 'root', // 登录数据库的账号
  password: 'toor', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作哪个数据库
})

// 3. 声明要插入到 users 表中的数据对象
const user = { username: 'tom', password: '123456' }
// 4. 待执行的 sql 语句，其中英文的 ? 表示占位符
const sqlstr = 'insert into users (username, password) values (?, ?)'

// 5. 使用数组的形式，依次为 ？ 占位符指定具体的值
db.query(sqlstr, [user.username, user.password] ,(err, results) => {
  // 插入失败
  if (err) return console.log(err.message)

  // 插入成功
  if (results.affectedRows === 1) { console.log('插入数据成功') }
})