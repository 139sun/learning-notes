### 数据类型
*1~5基本数据类型*
1. number 数字类型
    - 整数 int
    - 浮点 float
    - NaN (not a number)
        - 不是数字,实为一个特殊数字
        - 与任何数字都不相等 即使与NaN
        - 具有传染性, 参与任何计算,结果都为NaN
        - 运算操作符错误时得到
    - 无穷 Infinity  负无穷 -Infinity
        - 与其他任何数据类型计算 结果都为Infinity
        - 数字除以0得到

2. boolean 布尔值
    - 通常在流程控制语句,条件判断语句中使用
    - 值只有 true 和false
    - 约定 男 :true ;女: false
    - 值为false的有;
        - 数字 0
        - NaN
        - "" 空字符串
         - null
        - undefined
        - false
- 空数组[],空对象{}，转的布尔值时都为true
- NaN == NaN //false
- undefined == undefined//true
- null == null //true
3. 字符串 string


4. undefined
 定义了变量 未赋值
5. null 
9. Symbol
复杂数据类型
6. object 对象
7. 数组 array
8. 函数 function


### 数据类型转换
1. 转number (数字类型的字符串)
    - Number()函数
    - parseInt()
    - parseFloat()
2. 转Boolean
3. 转string
### 判断数据类型
```
typeof true // "boolean"
typeof Symbol(1) // "symbol"
typeof {} // "object"
typeof function(){} // "function"
typeof Symbol(1) // "symbol"
typeof undefined // "undefined"
typeof null // "object"，出名的坑
typeof [] // "object"，小坑
```
- instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
- [] instanceof Arrary //true

### 算数运算

### 三元运算符
var a = b ? c : d;
b 为真,则返回c,否则 执行返回 d;

var a = 5 > 3 ? 'I love you!':you are the bitch!';
console.log(a);
等价于====>
 if(5>3){                             
            a = 'I love you';
        }
        else{
            a ='you are a bitch!';
        }
        console.log(a);
alert(5>3?'i love you':'you are a bitch');
### Math( )
- Math.floor() 地板数
- Math.ceil() 天花板数
- Math.pow(2,3) 冥函数
- Math.max()
- Math.min()
- abs() 方法可返回数的绝对值
- Math.round() 四舍五入(不严格)
- Math.random()[0,1)之间任意数
    - 取[x,y)之间任意数的公式(x,y为整数) Math.floor(Math.random()*(y+1-x[即为个数])+x)
### Date()函数
```
var timer = Date();//返回一个字符串（string），没有getDate等日期对象方法，内容为当前时间
    console.log(timer);//Mon Jul 29 2019 10:49:57 GMT+0800 (中国标准时间)
var date = new Date();//返回一日期对象，可以调用getDate()，内容为当前时间
console.log(date);
 var year = date.getFullYear();
    var month = date.getMonth()+1;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliSeconds = date.getMilliseconds();
    var week = date.getDay()+1;//一周中的第几天
    var day = date.getDate();//一个月中的第几天
    var stamp = date.getTime();//时间戳
    var timeStr = year +'-' +day+'-' + week;
    data.toLocaleString()
    console.log(timeStr);
    console.log(stamp);
    console.log(year - stamp);
    data.toLocalString();
```
### 逻辑运算
&& ||  !取反
逻辑运算符返回的是其中的操作数
var a1 = 'cat' && 'dog';
console.log(a1);//dog
var a2 = 'cat' || 'dog';
console.log(a2);//cat
 console.log('cat' && 'dog');//dog

短路求值

+ false && anything    // 被短路求值为false（遇到false就返回）
+ true || anything       // 被短路求值为true（遇到true就返回）
+ 也就是说 上述 anything 部分并不会进行求值。



### 循环语句
- while(){

}
- do{}
    while();
    //定义 条件 执行可省略
- for(定义;条件;执行){
    动作
}

### 条件语句
- if(){

}
- if(){

}else{

}
- switch(){
    case 1 穷举:执行符合条件的动作;
    case 2:             ;
    break;
    default:与 case 1 和 case 2 不同时执行的代码;
    
}
###  Break 和 Continue 语句
- break 语句用于跳出循环。
- continue 用于跳过循环中的一个迭代

### 数组
1. 创建数组
    1. 构造函数
        - 无参构造函数,创建一空数组,逐个添加元素
          var newArr = new Array();
          newArr[0] = 345;
          newArr[1] = 89;
        - 一个数字参数构造 创建指定长度的空数组(多个数字参数视为元素)
            var arr = new Array(5);//元素为undefined
        - 带有初始化数据构造函数,创建数组,并初始化数据()
         var newArr = new Array(345,89);
    2. 字面量/表达式
        var newArr = [345,89];  //传入一个数字也视为元素
2. 数组遍历
    - for(var i = 0; i < newArr.length;i++){
            if(newArr[i]<20){
                console.log(newArr[i])                
                }
             }
    - for(var index in newArr){                 //for in 循环常用于对象的遍历//不推荐
        console.log(index);                     //index 数组下标
        console.log(newArr[index]);             //空元素不会列出
    }
3. 合并数组
var arr1,arr2;
arr3 = arr1.concat(arr2);                       //原有数组不会改变
4. 数组 <====> 字符串
    -  数组转字符串 数组名.join('分割符')
    var str = arr.join('不填默认为逗号,双引号不能忘');
        - arr.toString()方法 ,以逗号,分隔
    - 字符串转数组 数组名.split(分割标记,分割元素个数)
    var arr
5. 添加/删除元素              //都会改变原有数组,
    - 数组名.pop()          //删除数组最后一个元素,返回删除的元素
    - 数组名.shift( )       //删除数组第一个元素,返回删除的元素
    - 数组名.push(新元素)   //从后边添加一个元素,返回新数组长度
    - 数组名.unshift(新元素)//从前边添加一个元素,返回新数组长度
6. splice(删除并增加)       //改变原数组 //返回删除的数组
    - 数组.splice(index,num,新元素,新元素)  
    - 若下标从0开始,第一个index为下标,即相对数,否则为绝对数(即索引名);
    - 第二个num为删除的步长;
    - 可不添加新元素
7. 数组名.slice(index,index(从1开始,不包含该元素))    //数组切片,返回切片(不会改变原数组)
    - 参数只有一个,返回值到数组结尾
    - 下标为负,从后往前计数(在不知道数组具体长度时管用)
    - star大于end 返回空数组
8. 数组名.reverse()         翻转数组
    - 下标倒转
    - 若第一个下标不为0,倒转之后从0开始,空的下标位置保留
9. arr.sort() 对数组排序
    - 无参数 按照数组元素的首字符对应的Unicode编码值从小到大排列数组元素
    - 参数必须为函数 
        - 函数必须有两个参数,代表数组前后两个元素
             -    arr.sort(function(a,b){return a - b})
             -    arr.sort(function(a,b){return a.length - b.length})
10. 查找元素在数组中的索引 ,没找到返回-1
        - arr.indexOf(元素)//无法识别NaN
        - arr.lastIndexOf(元素)从后找
11. 清空数组
    - arr = [];
    - arr.length = 0; 
### string方法
    - str[0];
    - str.charAt(5);返回第5个字符
    - str.charCodeAt(5);返回对应字符串的unicode码
    - str.indexOf()  //寻找字符的下标
    - str.includes()//是否包含true/false
    - str.lastIndexOf()
    - toUpperCase() 大写
	- toLowerCase() 小写
    - str.concat(str2) 拼接字符串
    - str.substr(起始位置,[取的个数,无代表到最后])    //返回截取的片段,不改变元字符串
    - str.slice(起始位置,结束位置(不包括)) //返回截取的片段,不改变原字符串
### 冒泡排序

 // 给定一个数组,由小到大进行排序               //总共需要比较n*(n-1)/2次,n为数组元素个数
```
        var arr = [52,48,40,12];                 //总共需要移动的次数3n*(n-1)/2次
        for(var j =1 ;j <arr.length ; j++){  //总共循环arr.length-1次,既把右边n-1个数安排妥当
            for(var i = 0;i < arr.length-j;i++){   
                //第j次循环,比较arr.length-1-(j-1)=arr.length-j次
                if(arr[i] > arr[i+1]){                    
                    var mid = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = mid;
                }
                // console.log(arr);
            }
            // console.log(arr);   //循环第j圈的结果,把第arr.length-j的位置安排妥当
        }
        console.log(arr);
```

### 选择排序
 
    var arr = [99, 66, 12,58, 23, 15, 12];    
    for(i = 0 ; i < arr.length-1; i++ ){
        var minIndex = i;                 //先假设arr[i]为最小值,与右侧arr[j]比较
        for(var j = i + 1; j < arr.length; j++ ){
            if(arr[j]<arr[minIndex]){
                minIndex = j;           //找出每一遍循环的最小下标
            }

        }
        if(minIndex != i){
        var temp = arr[i];              //第i个比较元素与最小minIndex交换位置
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        }
           // console.log(arr);
    }   
     console.log(arr);


### 函数
    1. 定义函数
        - 通过关键字function声明定义            // 通过function关键字创建的函数可以先调用后声明
            function functionName (parameters){
                                执行的代码;
            }                               //函数声明不是一个可执行语句,不加分号
        - 通过表达式
            var y = function (a,b){return a*b};     //以分号结尾 //通过var定义只能先声明后调用
            var z = y(3,4);                          //匿名函数 
        - 通过JS函数构造器Function
            var myFunction = new Function('a','b', 'return a*b'); 
    2. 函数调用
        - (function(){console.log('wtf')})();  //函数自我调用
        - 函数名();
    3. 参数
        - 形参,实参
            实参个数大于形参,会出现错误;实参小于形参,舍弃多余的实参
        - 默认参数 
                函数调用时缺少参数,会默认undefined
                设置默认参数
                function foo(y){
                    y = y || 0 ;    //短路求值,若y已经定义,等于y;未定义,y为undefined,false,返回0; 
                }
       
    4. 变量及作用域 
        - 数据类型
            - 基本数据类型  变量x
                函数内部的修改不会改变变量本身的内容
            - 复杂数据类型 eg:数组  
                通过栈内存的地址,修改了堆内存的内容
        - 作用域
        - 全局变量,即window对象,浏览器窗口
            - 创建的变量都会作为window对象的属性保存
            - 创建的函数都会作为window对象的方法保存
            - 在函数体内部，但是没有声明var 的变量也是全局变量
            - 在页面的任意的部分都可以访问的到
        - 局部变量
            - 在函数体内部声明的变量,函数外拿不到
            - 在函数体内操作一个变量时会按照就近原则,
               从本函数体内部向上直到找到全局变量,否则报错
            - 全局作用域和函数作用域都定义了变量a,使用
               全局变量的方法window.a

### 递归
    - 调用函数自身
    - 需要有跳出条件
    - 性能较差


### 对象 描述事物,封装信息(js里一切皆为或者可以被用做对象)
    1. 对象分类
        - js内置对象
            Math Number Date Boolean String Object Array
        - 宿主对象 由运行环境即浏览器提供的对象
            Dom Bom
        - 自定义对象
        - 一切变量都具有对象的性质
    2. 对象的创建
        - 通过构造函数 new 一个实例
            - var obj = new Object();
        - 通过字面量定义
            - var obj = {
                (属性或者方法)
                key : 'vaule',      //对象内部用":"和","
            }
        - 通过自定义构造函数  (构造函数首字母必须大写)

            - function Person(){            this 指针 指向调用时所在函数所绑定的对象
              this.name = 'zhangsan';
                this.age = 6578;   
                this.say = function(){          //函数内部使用"="和";"
                    console.log('抽你信不信')
                }              
            }
            var obj = new Person();
             obj.say(); //调用方法
    2.3.对象属性的调用
    var blue = obj.name;或者name属性是变量时用obj[name]
    - 添加属性 obj.age = 45;
    - 删除属性 delete obj.name;
    -对象遍历
    for( var key in obj){
        console.log(obj[key])//只能这种方法
    }
### JSON对象   文本传输格式
    4.   json键/值对组合中的键名写在前面并用双引号 "" 包裹，使用冒号 : 分隔
    1. json字符串转换为json对象 JSON.parse(jsonStr)     
         - var jsonStr = '{"name" : "zhangsan", "sex"  : "male","site" : "wudangshan" }';
        var jsonObj = JSON.parse(jsonStr);  

    2. json对象转换为json字符串 JSON.stringify(jsonStr)
        -  var newStr = JSON.stringify(jsonObj);
         console.log(newStr);
    3. json的遍历
        for(var key in jsonObj){
           console.log(jsonObj[key]); //key为变量,必须加[]
       }