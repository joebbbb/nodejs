const express = require('express')

const app = express()

// app.use() 的作用，就是注册中间件
// express.static() 方法，可以把 指定的 目录，托管为静态资源目录，这样，指定目录下的所有文件，
// 都可以直接被 浏览器来访问
// app.use(express.static('./views'))

// 可以在托管静态资源文件的时候，指定要挂载的虚拟路径；
app.use('/page', express.static('./views'))

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})