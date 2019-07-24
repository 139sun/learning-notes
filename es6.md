### 函数
- fun:function(){}
- 简写fun(){}
### 箭头函数
- tip:setTimeout 定时器内this指向window,
- =>函数可改变this指向至父元素
-  var fun = (res)=>{return res}等价于
    -var fun =  function (res){return(res)} 
- res为参数,一个的时候可以省略(),一个return,可以省略{}
### var let const
    - var : 变量声明提升  声明未赋值undefined
    - let :块级作用域{},域外不能访问,但可访问上级作用域的声明,
        同一作用域不能重复声明,但赋值可更改
        全局变量不属于window对象,不能使用window.来访问
    - const: 声明只读常量,一旦声明,常量不能更改,复杂数据类型可更改其地址指向数据
### 函数默认值
   - 设置形参默认值 function fun(a,b = "hello,world"){}
### 数据解构赋值
    - 变量解构
        ` [ ,a,b,c] = [2, ,"vue"] `
        - 变量不用事先声明
        - 赋值多去少补undefined
    - 对象解构
    var { title, name } = {
            name: "李白",
            title: "天子门生",
        };
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
### 数组拓展
####
- console.log(NaN === NaN)//false
#### 拓展运算符 ...
- 用作数组去重[...new Set(arr)]
- 数组拼接[...arr,...arr]
- 将类对象(例如arguments)转换为真正的数组Array.from(set);
#### 数组操作
- find()/findIndex()
    - 方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
    - 返回符合条件的元素值/元素位置

- map() 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组

- forEach 对数组遍历,相对于map不能更改元素值,且遍历过程不能被打断

- every()/some() 每一项/任一项符合条件返回true

- filter() 返回符合条件元素的新数组

- include() 用来判断一个数组是否包含一个指定的值，如果是返回 true

## vue
### 指令
- [v-cloak] :用于解决{{}}闪烁
- v-text:用于渲染文本
- v-html:用于渲染文本标签
- v-show:根据表达式的布尔值来决定是否显示
- v-if v-else v-elseif :条件为真,重建DOM,否则销毁Dom元素
- v-for(Array | Object | number | string | Iterable )
    - v-for:"(value,key,index) in object" 别名不影响实际值顺序
- v-bind: