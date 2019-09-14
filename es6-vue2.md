### 函数
- fun:function(val){}//对象(方法)
- 简写fun(val){}    //函数
### 箭头函数
- 箭头函数没有自己的this，arguments，super或 new.target。
- 这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。
- tip:setTimeout 定时器内this指向window,
- arrow函数可改变this指向至父元素
-  var fun = (res)=>{return res}等价于
    -var fun =  function (res){return res } 
- res为参数,一个的时候可以省略(),一个return,可以省略{}和return
- 取代匿名及立即执行函数
### var let const
    - var : 变量声明提升  声明未赋值undefined
    - let :块级作用域{},域外不能访问,但可访问上级作用域的声明,
        同一作用域不能重复声明,但赋值可更改
        全局变量不属于window对象,不能使用window.来访问
    - const: 声明只读常量,一旦声明,常量不能更改,复杂数据类型可更改其地址指向数据
### 函数默认值
   - 设置形参默认值 function fun(a,b = "hello,world"){}
### 变量解构赋值
- 变量解构
        ` [ ,a,b,c] = [2, ,"vue"] `
        - 变量不用事先声明
        - 赋值多去除少了就补undefined
- 对象解构
    var { title, name } = {
            name: "李白",
            title: "天子门生",
        };
    - es6中,若对象的key与value相同,可简写成一个 
    - 冒号后面的属性值才是我们需要赋值的变量，解构会在右侧表达式对象中找到和左侧对象相同的属性名，以该属性值为对应变量赋值，如果没找到，那么该变量值为undefined
### map数据结构和set 数据结构
- set 类似于数组,没有重复值,本身是个构造函数
    - Set结构实例属性 set.size
    - Set结构实例方法: 
        - 操作方法:set.add(value) set.delete(value) set.has(value) set.clear()
        - 遍历方法:set.forEach(function(){})
- Map 类似于对象 键值对的集合 ,但是键"key"不局限于字符串
    - map.size
    - map.set(key,value) 可采用链式写法.set().set()
    - map.get(key)      //若key为复杂数据类型,内存地址不一样,结果为undefined
    - map.delete(key) // 同理,同样复杂key值的两个实例,在map结构中会被视为两个键
    - map.has(key)
    - map.clear()
### Promise函数
- 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理
- 同样是构造函数
```
- const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then().catch()
```
- promise.all
```
var ajax1 = $.ajax({
    url:....,
    methods:"get",
})
var ajax2 = $.ajax({
    url:....,
    methods:"get",
})
var a = 158;
//迭代对象
Promise.all([ajax1,ajax2,a]).then(function(val){console.log(val)})
//val []返回三个success的res值;
```
### 数组拓展
####
- console.log(NaN === NaN)//false
#### 拓展运算符 ... (称作rest/spread)
- 用作数组去重[...new Set(arr)]
- 数组拼接[...arr,...arr]
- 将类对象(例如arguments)转换为真正的数组Array.from(set);
#### 数组操作
- find()/findIndex()
    - 方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
    - 返回符合条件的元素值/元素位置
    - 未找到,返回undefined

- map() 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组

- forEach 对数组遍历,相对于map不能更改元素值,且遍历过程不能被打断

- every()/some() 每一项/任一项符合条件返回true

- filter() 返回所有符合条件的元素的新数组

- includes() 用来判断一个数组是否包含一个指定的值，如果是返回 true
      -  arr.includes(srt),不能对每个子项进行操作
- reduce()   arr.reduce(function(prev,cur,index,arr){...}, init);
    - function() 回调函数
    - prev 表示上一次调用回调时的返回值或数组的第一个元素，设置初始值init时为init,必须参数
    - cur 当前处理的数组元素,当前选项item,设置init时为第一个元素,否则为第二个元素 ,必须参数
    - index 当前处理元素的下标,有init初始值为0,否则为1,非必须
    - arr 当前数组,非必须
## vue
### 声明式渲染
- 命令式渲染 获取节点元素,操作DOM赋值innerHTML完成渲染
- 声明 message:123;
### 指令
- [v-cloak] :用于解决{{}}闪烁
- v-text:用于渲染文本
- v-html:用于渲染文本标签
- v-show:根据表达式的布尔值来决定是否显示
- v-if v-else v-elseif :条件为真,重建DOM,否则销毁Dom元素
- v-for(Array | Object | number | string | Iterable )
    -对数组渲染
        - 在 v-for 块中，我们可以访问所有父作用域的属性。
        - v-for 还支持一个可选的第二个参数，即当前项的索引。
    - 对对象渲染
        - v-for:"(value,key,index) in object" 别名不影响参数意义
        - 第一,二,三个参数 依次为value ,key,index名称,

    - vue中列表循环需加:key="唯一标识" 唯一标识可以是item里面id index等，因为vue组件高度复用增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM
- v-pre:该元素不渲染
- v-once:该元素只渲染一次
### 数据绑定
#### v-bind 单向数据绑定 Model->view
##### 修饰器
.prop - 被用于绑定 DOM 属性 (property)
.camel - (2.1.0+) 将 kebab-case 特性名转换为 camelCase. (从 2.1.0 开始支持)
.sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。
##### 基本用法
    - :class = "var"
- 添加class属性
    -数组方式添加class :class="classList"
    - :class="[isActive? 'red':'blue' ]"
    - :class=" {blue:isAddClass,red:ifshow}"//对象方式添加,isAddClass为布尔值
    - :class = "[activeClass,errorClass]"//多个class属性
- style样式绑定
    - 对象语法
        - :style="{color:colors}"
        - :style="{styleObj}" //样式对象
- 点击元素改变背景颜色

#### 双括号插值{{}} 单向绑定
- 在vue的js中引入图片资源 应该使用require
#### v-model 对表单双向数据绑定
- <label for="checkbox">{{ checked }}</label> 绑定区域id所属元素,实现定焦
- 三个表单修饰符
    - v-model.number 将输入的字符转换成数字类型ParseFloat()方法
        - 这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。
    - .trim 清除输入前后的空格
    - .lazy 在input失焦时对数据进行同步
#### v-on/缩写@
- 用来监听事件
    - 预期：Function | Inline Statement | Object
    - 参数：event
- 事件
    - @keyup
    - @click
    - @submit
- 处理事件
    - v-on 还可以接收一个需要调用的方法名称
    - 除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法
    - 在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法
- 事件修饰符
    - stop 阻止事件传播
    - prevent 阻止默认事件
    - capture 触发捕获事件
    - self 只执行自身事件
    - once 只触发一次事件
    - passive 立即触发默认事件/) 以 { passive: true } 模式添加侦听器
    - left - (2.2.0) 只当点击鼠标左键时触发。
    - right - (2.2.0) 只当点击鼠标右键时触发。
    - middle - (2.2.0) 只当点击鼠标中键时触发。
    - <!-- 对象语法 (2.4.0+) --> 不带修饰器
    button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
#### 按键修饰符
- :keyup
### 计算属性computed
- 计算属性是基于它们的响应式依赖进行缓存的,当model更新时才会刷新,开始自动渲染
- 用于计算复杂逻辑,总会return计算结果

- 每当触发重新渲染时，调用方法methods将总会再次执行函数
- watch 侦听器 只能侦听一个属性
### vue 生命周期钩子[为函数,图示](https://cn.vuejs.org/images/lifecycle.png)
- beforeCreat
- created
- beforeMount
+ mounted
    + vm.$nextTick( [callback] )
    + 将回调延迟到下次 DOM 更新循环之后执行
- beforeUpdate
- updated
- beforeDestroy
- destroyed

### 组件components
+ 全局组件
    - Vue.component("com",{ template:"#com"})
- 局部组件
- template写法
- 碰到title关键字一次
### 传值
- DOM里不识别大写字母,js驼峰写法通过"-"连接代替
#### 子组件到父组件 通过事件传值 
- 规定不能传复杂数据类型 array object等
- 子组件 this.$emit("postevent",message)
- 父组件  :postevent = "method" method(val){}
#### 父组件传值到子组件
- 父级 v-bind  子组件 props{}
#### 同级组件传值 
- var bus = new Vue()
- 传 bus.$emit("postevent",message)
- 收    created(){
    bus.$on('postevent',el=>{console.log(el)})
    }
#### sync父级与子组件同步数据 
    - html: <list :message.sync="message0"> </list>
    - 子组件: postevent(){
        this.$emit("update:message",!this.Message1)
    } 
### 自定义指令
- 全局 Vue.directive("focus",{
    bind:function(el,binding)
    })
- 局部 directives:{
    focus:{
        update:function(el,binding){

        }
    }
    },
- bind和update 简写
    - Vue.directive('focus', function (el, binding) {
    })
#### 钩子函数
- bind
- inserted
- update
##### 钩子函数参数 
- el
- binding
     - value
     - name
### 插槽
- 为使组件标签内的内容被渲染,组件模版中必须有<slot></slot>
- 否则内容会被遗弃,内容存在插槽中
#### 后备内容
- 当组件标签内没有内容时,显示<slot></slot>内的后备内容
#### 编译作用域
- 编译过程中组件标签内变量默认查找的是父作用域的属性和方法
#### 具名插槽
- 多个插槽,使用slot特性name来区分
- 模版中<slot name = 'names'></slot>
- 标签内 <template v-solot:names>内容</template>
- 一个不带 name 的 <slot> 出口会带有隐含的名字“default
- 任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容
#### 作用域插槽
- 用于访问当前子组件数据,但不能修改
- 模型:<slot v-bind:names = "name"></slot> 绑定子组件数据
- 标签内<template v-slot:default = 'slotProps'>{{slotProps.names}}</template>
### 过渡状态
- mode 过渡模式in-out ,out-in,不加消失和出现过渡同时进行
- name:过渡部分名称,不加默认.v-enter,.v-leave;
- 6个class切换 .v-enter 初始状态 .v-enter-to进入过渡结束状态 .v-enter-active进入时的函数曲线
```
<transition name = "fade" mode ="in-out"></transiton>
```
#### 动态组件
- keep-alive 缓存状态,防止组件被销毁
```
<keep-alive>
<component :is = "currentComponent"></component>
</keep-alive>
``` 
### 过滤器fliter
- 使用在双花括号插值和 v-bind 表达式后|fliterName
- 当全局过滤器和局部过滤器重名时，会采用局部过滤器
- 过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数
- 全局过滤器
    - Vue.fliter:{"fliterName",function(val){}}
- 局部过滤器
    - fliters:{fliterName:function(val){}}
### 边界情况
- 根实例this.$root
- 父组件 this.$parent
- ref= 'name' ;this.$refs.name/vm.$refs.name;
    - 用在子组件上表示该子组件,可调用该组件属性和方法
    - 用在dom元素上表示该DOM元素
- 混入
    - 在组件中引用混入对象myMix={
        created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
    },
    - mixins:[myMix]
    - 当前实例中有相同的属性和方法则被覆盖