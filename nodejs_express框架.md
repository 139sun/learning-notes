# nodejs
> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 

+ 之前js只能在x.html中通过浏览器打开运行,运行环境是window对象.
+ 通过安装nodejs本地客户端,可以把js运行环境安装到本地.

## 当前nodejs
### nodejs后台开发

### 前端自动化的支撑
+ webpack 依赖于nodejs
+ npm
+ 其他前端工具

## node环境
+ 安装
+ cmd ==>  node -v 查看版本号
+ nvm(node version manager ) 目前不需要
+ npm(node package manager) node包管理工具
+ 测试  在文件夹窗口运行 node  xx.js  


## express web开发框架
> 基于 Node.js 平台，快速、开放、极简的 Web 开发框架 site: http://www.expressjs.com.cn/

+ 安装 $ npm install express-generator -g
+ 验证安装成功:   cmd => express --version  版本号


## express 目录结构
+ bin  启动目录 
+ node_modules 依赖库
+ public 公共库 静态资源库 css js  img...
  - 不能找到引入文件 试一下添加/删除 type=text/javascript
+ routes 后台路由/拦截器/后台逻辑等
+ views  前台模板(页面)
+ app.js 启动执行文件
+ package.json  项目描述依赖说明


## 创建express项目
+ 文件夹 输入  express --view=ejs myapp
+ 进入myapp 通过npm 安装依赖
+ 在当前文件夹 执行   npm start  
+ 访问 http://localhost:3000
  
## 关于本地服务
+ http://localhost  == http://localhost:80  最常用的测试地址
  + 80  端口 可以省略不写
  + 一个端口只能被一个应用使用
  + 端口不能冲突
+ http://127.0.0.1 也只指的本地测试地址
+ http://192.160.0.100  内网地址 局域网可访问
  + cmd => ipconfig 
  + 以太网 有线网
  + 无线网
+ http://192.168.0.150  外网地址 可以通过wifi访问

## express 改造
### 错误编码
    + 404  文件没找到,一般是路径错误
    + 500  一般服务器错误
    + 200 请求成功
    + 302 转发...



### cookie 安装 
> https://www.npmjs.com/package/cookie

+ npm install cookie
### router路由
- 不同于vue页面路由
/* 拦截执行登陆请求 */
- router.post('/doLogin', function(req, res, next) {
  res.render('login',{username:req.headers.cookie }); 
  res.redirect('login')
}
### 渲染函数
/*  注意: 1. render 作用  找到第一个参数的模板对象, 用第二个参数的值替换模板中的变量,并把替换后的结果(html)返回给客户端,url不会改变,会重复发送请求
  
        2. redirect  重定向/内部转发请求
          问题: 会丢失req的参数 ??
        */
    // res.render('/login');7cxi8
    // 登录成功: 1. 给客户端 设置cookie 
    //         2. 把当前用户状态存入session
#### post/get
  // 需要从req对象 获取携带过来的信息
  /*
    1. get/post提交 方式不同  存储参数的形式也不同 
    2. get 参数 通过 req.query.username;
    3. post 参数 通过 req.body.username;
    什么时候用?  增删改查
    1. get 一般用与查询数据,对后台数据没有影响
    2. post 一般用于提交修改数据的请求,对后台数据有影响的操作
    3. delete get/post 都行
  */


## 模板引擎
+ .ejs/.pug  nodejs
+ .jsp/.action/.do/.html...  java  
+ .php
+ .py ...  
+ .asp  .net
+ .bufan...


## 跨域
> 同源策略是浏览器的一种安全策略，所谓同源是指协议，域名，端口完全相同. 如果非同源 发送ajax请求 就会形成跨域.

### 解决跨域的四种形式
+ jsonp  不用了 只能获取 不能提交
+ 后台配置cors   https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
+ vue项目里 可以配合webpack 设置代理proxy  使当地请求模拟服务端请求 绕过跨域  (开发时候)
+ nginx(服务器软件) 配置转发  