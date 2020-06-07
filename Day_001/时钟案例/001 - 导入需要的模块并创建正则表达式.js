// 1.1 导入 fs 文件系统模块
const fs = require('fs')
// 1.2 导入 path 路径处理模块
const path = require('path')

// 1.3 匹配 <style></style> 标签的正则
// \s 表示空白字符  \S 表示非空字符  * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/

// 1.4 匹配 <script></script> 标签的正则
const regScript = /<script>[\s\S]*<\/script>/
