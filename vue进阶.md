### vue cli 脚手架安装
- babel es6转译es5
### 新建项目
- vue create my-project
- 中断创建Ctrl+c
- 安装依赖 根目录 右键 在终端中打开 npm install 
     - 安装package.json中"dependencies","devDependencies"里的所有插件
     - 单独插件 在其后添加插件名
     - node_modules即为安装的插件
     - cd demo //定位到下级demo文件夹
### 新建项目 搭建交互式的项目脚手架
- 右键打开 在终端中打开
- npm install mockjs --save
- import Mock from "mockjs";
- created() {
    var lists = Mock.mock({
      "list|6": [
        {
          id: Mock.Random.guid(),
          ifShow: true,
          pic: '@dataImage("200x200","你瞅啥")',
          title: "@ctitle()"
        }
      ]
    });
    this.list = lists.list;
  }
### 调试
+ 项目中
    - 在终端中打开
    - npm run serve
    - 本地服务地址=>chrom
+ 单个页面
    - vue live serve插件
    - 右键 open live serve
### 概念解析
- 一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。
    挂载元素的内容都将被忽略，除非模板的内容有分发插槽
#### main.js 入口文件是初始化vue实例并使用需要的插件,加载各种公共组件
- render渲染函数 
- render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
- h1 创建的根节点VNode(虚拟节点)
- this.blogTitle,子级虚拟节点VNodes
-  render: h => h(App) h的实参为createElement函数
- app.$mount("#app")  手动挂载到DOM(#app)元素上,取代{el:'#app'}属性
#### package.json 是包管理配置文件 存放的是项目所需要的依赖
#### App.vue
- 是我们的主组件，页面入口文件 ，所有页面都是在App.vue下进行切换的。
    也是整个项目的关键，app.vue负责构建定义及页面组件归集。
### 输入输出
- export,import命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错
- export输出的js文件为module

#### export
- export语句输出的接口，与其对应的值是动态绑定关系，
    即通过该接口，可以取到模块内部实时的值。
var fun = function(){}
    + export function fun(){}
    - export var a = "诸葛孔明'
    - export {fun,a}
    - export {fun as streamFun}//重命名之后可以
#### import
- @是以src为根目录引入
- 没有相对路径标识符,会去node_module里寻找
- import {function,a} from "myModule"
- {}里变量名必须一一对应
- import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口
- import命令具有提升效果，会提升到整个模块的头部，首先执行
- 路径.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件
#### 整体加载和输出
- 整体加载全部输出 对象* import * as obj from "file'
- 整体输出 export default function(){},匿名函数
    - import function from "file"//可以指定任意名称且不需要{}
    - export default命令的本质是将后面的值，赋给default变量
## 路由router 
#### 页面路由
+ router.js 
    - import Vue from 'vue'
    - 引入路由插件import Router from 'vue-router'
    - 注册路由Vue.use(Router)
    - 引入路由组件import home from "@/view/home/index.vue"
    - 定义路由规则routers :[{
        path:"/home",  //自定义页面路径,相对于根目录
        component:home
    }]
+ app.vue 根页面 
    - vue-router提供的标签
    - <router-link to="/home" tag="h2">跳转到home页</router-link>
    -  <router-view /> //容器,存放对应的组件
+ js跳转 menthods:{goto:{this.$router.push({path:"/home"})}}
    - 字符串形式 this.$router.push("/home")
##### 传值query  相当于 get 请求
+ 路由query传值 <router-link to="/user?user = '诸葛亮'&age = 44">user页面</router-link>
    - 获取传值 console.log(this.$route.query)
+ js传值 menthods:{goto:{this.$router.push{path:"/home",query:{user = '诸葛亮'}}}}
##### 动态路由params  相当于post请求
- 仅传递id值,id可随意命名,共用一个组件
- router.js =>path:"/home/:id" 
- home.vue =><router-link to="/home/1"></router-link>
+ 传值<router-link :to="{name:'info',params:{id:4}}"></router-link>
    - 动态路由传值path 与 params不能共存,所以使用命名路由的方式进行跳转
    - js动态传值 this.$router.push({name:"info",params:{id:5}});
<!-- 获取params传递过来的参数 this.$route.params.id -->
#### 变量跳转
```
 <li  v-for="item in list" :key="item.id" @click="$router.push(`/details/${item.id}`)"></li>
 <router-link tag="li" :to="`/info/${item.id}`" v-for="item in list" :key="item.id">
```
### 编程式导航
+ router.push()
    - 点击 <router-link :to="..."> 等同于调用 this.$router.push(...)
    - 这个方法会向 history 栈添加一个新的记录
+ router replace 这个方法会向 history 栈替换一个记录
+ this.$router.go(n)
    - 在 history 记录中向前或者后退多少步，类似 window.history.go(n)
##### 嵌套路由
- children:[
    {
        path:"user/:id"
        component:user
    }
],
- <router-link to="/home/user/id"></route-link>
### 定义routes[]
- mode:history/hash
- class激活重命名router-link-active=> linkActiveClass:"v-active" 
-  routes配置重定向 redirect:"/user/phone" 
- this.$route 当前路由 this.$router所有路由
### 命名路由
- routes 配置中给定name属性:"user"
- <router-link to="{name = 'user',params = {userId:123}}"></router-link>

### 导航守卫
#### 全局守卫
- router.beforeEach((to, from, next) => {
  // ...
})
#### 路由守卫
- beforeEnter: (to, from, next) => {
        // ...路由内,适用于淘宝登录页面
      }
#### 组件守卫
- beforeRouteEnter
- beforeRouteUpdate 
- beforeRouteLeave
### else
- 路由元meta
    -  自定义信息anything
- 过渡动效
```
    <transition name = "style">
    <router-view/>
    </transition>
```
- 滚动行为
- 路由懒加载
    - component:() => import( '@/view/mine/mine.vue')
## Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
### state
- 全局的数据仓库 获取this.$store.state.age
### mutation 同步函数
- 全局方法  在methods事件中调用 this.$store.commit('handle')
- handle(state,params){}
- 必要参数state ,params可以为对象 数组,
### action 异步函数
- Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象作为参数
- 可以调用context.commit来提交一个mutation,或者context.getter
- 分发store.dispatch('increment')
### getter
- 在computed中调用 this.$store.getter.handle;
- 让 getter 返回一个函数，来实现给 getter 传参
### 辅助函数mapState,mapMutations,mapGetters,mapActions语法糖
```js
import {mapState,mapMutations, mapGetters,mapActions} from 'vuex';//引入
computed:{
   ...mapState({
        name:"name",//字符串写法
        num:state => state.num,//箭头函数
        age:function(state){
            return state.age + this.username//可以使用this本地数据
        },
    }),
    ...mapGetters({
        add(state){
            return state.add
        }
    })
    ...mapGetters([//字符串写法
        'add'
    ])
},
methods:{
   ...mapMutations([//第一种方法
        "add",  // 调用的时候执行this.add() 
        "adds",  // 如果需要提交载荷  直接调用 this.adds(num ) 映射为 `this.$store.commit('adds', num)`
   ]),
   ...mapActions({
        add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
   })
}

```
```
actions: {
    increment(contents) {
      contents.commit('update');
      contents.state.count;
    }
  },//等价于=>将content解构
  actions: {
    increment({{commit}}) {
      commit('update');
      state.count;
    }
  },
```
### module vuex模块化
- 在views文件夹同级目录建立store文件夹,并在其下建立store.js和models文件夹
- 在store.js 中从models文件夹中import home.js
- export default new Vuex.store({
    modules:{
        homes:home,
    }
})
- 在home.js中const modelA={
     namespaced: true,//***命名空间 ***
     state:{}
}
export default moduleA;
- 启用空间命名后写法 
    - this.$store.getters['a/addNum2']
    - this.$store.dispatch('a/syncAddNum',3)
- 启用辅助函数
```
     ...mapState({
    a1: state => state.b.num,  
}),
...mapState({
    a1: state => state.b.num,  
}),
...mapMutations({event : "b/addNum"}),
...mapMutations({event : "b/addNum"}),
```
### vuecli安装问题
- Error: Watching remote files is not supported.
- webpack-dev-server出了问题，这是setupWatchStaticFeature函数
在3.7.2和3.8.0之间发生了变化引起的问题
- 解决方案:npm install webpack-dev-server@3.7.2 --save-dev
## axios 基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
- cnpm install axios --save
- 封装 在src下新建api文件夹 下新建axios.js文件
- axios.js 中 import axios from "axios" 
    - import qs from "qs"
    - 设置全局默认 axios.defaults.timeout baseURL
    - 设置 request response 拦截器interceptors
    - export default axios
- 在main.js 中 import api from "@/api/axios"
    - Vue.prototype.$ajax = api
- 使用注意：即使已经在 main.js 中引入了 axios，并改写了原型链，
    也无法在 store.js 中直接使用 $ajax 命令
### get
- 传参两种方式
- this.ajax.get('url',{
    params:{
        name:'',
    }
})
.then((res)=>{
    console.log(res)
})
.catch()
- this.ajax.get('URL?name=${this.name}$age = 40')
### post
- this.ajax.post('URL',this.name)
- data参数传给后端需要转换qs.stringify(data)
-  多个请求this.axios.all([this.init(), this.getUserInfo()])
## ui框架
### element框架
### vant移动端ui框架
- npm i vant -S
- 上拉刷新需要手动设置高度100%
- this.$toast
- 基于vue-cli3的vue项目移动端样式适配，lib-flexible和postcss-px2rem
- 按需引入/导入所有插件
### vue ui
- 在文件夹中shift+鼠标右键选择打开命令窗口
- 运行命令 vue ui
### VScode 快捷键
- 选中所有相同内容并进入编辑状态 ctrl+shift+L
- 快速多处选定 shift+alt+左键
- shift+alt+鼠标拖动 列选择
- 查找 (选中)ctrl+f
- 多行选中 alt+左键
- 命令行 向上方向键返回最近的命令
## webpack 一个现代 JavaScript 应用程序的静态模块打包器(module bundler)
### 基本概念
+ 入口(entry)
+ 输出(output)
+ loader
    - 让 webpack 能够去处理那些非 JavaScript 文件
    - webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块
    - loader 有两个目标：test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件
                        use 属性，表示进行转换时，应该使用哪个 loader。
+ 插件(plugins)

#### 基本的构建
1. 新建webpack-demo文件夹
2. 右键在终端terminal中打开 npm init -y
3. npm install webpack webpack-cli --save-dev
4. 创建目录结构,文件
webpack-demo
  |- package.json // "private": true,安装包是私有的(private)，
                    并且移除 main 入口, "main": "index.js"
  |- /dist  //“分发”代码是构建过程产生的代码最小化和优化后的“输出”目录，最终将在浏览器中加载
   |- index.html
  |- /src   //工作目录,“源”代码是用于书写和编辑的代码
    |- index.js
- 用 CLI 方式(npx webpack)来运行本地的 webpack 
- 执行 npx webpack，会将我们的脚本作为入口起点，然后 输出 为 main.js 
5. 创建一个 bundle 文件
    - npm install --save lodash
    - 在 index.js 脚本中打包 lodash 依赖  import _ from 'lodash';
    - 更新index.html文件lodash 由src 引入变为通过import script引入好处大大的
6. 为应对复杂设置,在project根目录下新建 配置文件 webpack.config.js
7. 在 package.json 添加一个 npm 脚本(npm script)  "scripts": {"build": "webpack"}
- 确保output filename 与index.html引入文件相同
#### 管理资源
- css
    - 在 module 配置中 安装并添加 style-loader 和 css-loader：
        npm install --save-dev style-loader css-loader
    - 在index.js中引入css文件  
- 加载图片
- 加载字体
### 管理输出
- 一旦开始对文件名使用哈希(hash)]并输出多个 bundle,手动管理index.html比较麻烦
- 使用插件npm install --save-dev html-webpack-plugin
- HtmlWebpackPlugin 会默认生成 index.html 文件替换原来的,所有的 bundle 会自动添加到 html 中
#### 清理/dist文件夹
- 中文文档有误
- webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中,比较混乱
- npm install clean-webpack-plugin --save-dev
### 建立开发环境
- JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码,方便定位错误
- webpack帮助在代码发生变化后自动编译代码
    - 使用观察模式 添加一个用于启动 webpack 的观察模式的 npm script 脚本
    "watch": "webpack --watch",在命令行中运行 npm run watch，就会看到 webpack 编译代码，然而却不会退出命令行
    - 最常用 webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载
        - npm install --save-dev webpack-dev-server
#### tree shaking 
- tree shaking 移除 JavaScript 上下文中的未引用代码(dead-code)
- 设置mode: "production"
### 建立生产环境
- 遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置
- 安装 webpack-merge 并将之前指南中已经成型的那些代码再次进行分离：
- npm install --save-dev webpack-merge
### 代码分离
