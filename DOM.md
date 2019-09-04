### 事件三要素
     - 事件源 事件触发 事件处理
     - js 任务:获取事件源 绑定事件 进行任务处理
## 获取节点
    - 获取元素  //包装成document对象    
        - document.getElementById('dome');
        - document.getELementsByTagName('div')[0];      
            //切记不要忘了[0]//当有一个节点时[0]代表这个元素;多个同名节点,[0]数字代表下标
        - document. getElementsByClassName('dot')[0];
    - 通过已知元素的属性获取节点
        - node.parentNode;//父节点
        - 兄弟节点(存在浏览器兼容问题,兼容写法位置不能交换)
            - var nodeName = node.NextElementSibling || node.NextSibling
            - var nodeName = node.PreviousElementSibling || node.PreviousSibling
        - 单个子节点
            - firstChild       //第一个节点
            - firstElementChild//第一个元素节点
            - lastElementChild
            - lastChild
        - 所有子节点
            - children       // 嫡出 包含所有节点,文本,注释,标签
            - childrenNode    //庶出 只包含标签节点,但ie678包含注释节点,所以要筛选
            -nodeType
                    == 1 标签节点
                    == 2 属性节点
                    == 3 文本节点
                    == 4 注释节点
            - 从孩子节点中摘出标签节点并封装
                - function myChildren(node){
                    var myChildren = [];
                    var children = nodeChildren;
                    for(i = 0;i<children.length;i++ ){
                            if(children[i].nodeType == 1){
                                myChildren.push(children[i]);
                            }
                    }
                    return myChildren;
                }
            - 找出兄弟节点 block方法
            function getNextSibling(node){        
            var parentNode = node.parentNode;
            var childrenNode = parentNode.children
            var nextSibling = [];
            var lock = false;               //block
            for(var i in childrenNode){
                if(childrenNode[i].nodeType == 1){
                    if(childrenNode[i]==node){
                        lock = true;
                    }else{
                        if(lock){
                            nextSibling.push(childrenNode[i])
                        }
                    }
                }
            }
            return nextSibling;
         }
## 操作节点
   
    1. 创建节点
     - var node = document.createElement('img')
    2. 插入节点
    - parentNode .appendChild(node) 
    - parentNode.insertBefore(newItem,existingItem)
    3. 删除节点
    - parentNode.removeChild(node)
    - node.parentNode.removeChild(node)//不知道父节点的情况
    4. 复制节点
    - node.cloneNode(true/false);
### 提交数据函数
        function insertData(msg){
            str = '<td>'+$('tr').length+'</td><td>'+msg.name+'</td><td>'+msg.age+'</           td><td>'+msg.gender+'</td><td><button class="edit">编辑</                       button><button class="del">删除</button></td>';
            var trNode = document.createElement('tr');
            trNode.innerHTML = str;
            $('tbody')[0].appendChild(trNode);
        }
## 操作节点属性

    - 设置：setAttribute('属性名称', '新的属性值')//所有属性值全部替换,不要忘记()
    - 删除：removeAttribute(名称)            //所有属性值都被删除
    - 获取  getAttribute('名称')               //所有属性值  返回string 
    -  /**
        * 添加一个类名的封装函数
        * @param {*} el  要添加类名的节点
        * @param {*} classValue  要添加的类名
        */
    function addClass(el, classValue){
        var newStr = '';
        var oldClass = el.getAttribute('class');
        if(oldClass === null){
            el.class = classValue;
        }else{
        var oldArr  = oldClass.split(' ');
        var result = oldArr.indexOf(classValue);
        if(result === -1){
            // oldArr.push(classValue);
            // newStr = oldArr.join(' ');
             newStr = oldClass +' '+ classValue;
            el.setAttribute('class',newStr);
        }        
    }
    }
    -  /**
        * 删除一个类名的封装函数
        * @param {*} el 要删除类名的节点
        * @param {*} classValue 要删除的类名
        */
        function delClass(el,classValue){
        var newStr = '';
        var oldClass = el.getAttribute('class');
         if(oldClass === null){
            return;
        }else{
        var oldArr = oldClass.split(' ');
        var result = oldArr.indexOf(classValue);
        if(result !== -1){
            oldArr.splice(result,1);
            newStr = oldArr.join(' ');
            el.setAttribute('class' , newStr);
            }      
         }
        }
### 设置class属性
        - element.className 获取class属性
        - element.className = 'className';

## 操作内容         
    - parentNOde.value = "内容"//只对表单生效
    - node.innerText    = 'text'
    - node.innerHTML    = '<img scr= "" atl="">'
    - 获取内容 node.innerHTML
### 监听器
    - //                        action动作事件; 执行函数 ;捕获(默认)或者冒泡
    - element.addEventListener(action,function(){},false/true)
    - removeEventListener
### 定时器
    - setTimeout(code,millisec)
    -clearTimeout
    - setInterval(code,millisec)
    - clearInterval
### 闭包和立即执行函数(计数器)
  var add=  (function foo(){
        var counter = 0;
        return function({
            return counter++;
        }
    })()
### argument对象
    - 函数的实参对象,只能在函数内部使用
    - argument.length
    - argument.[index]
    - argument.callee//函数本身,递归函数推荐使用
### event事件对象
### 循环绑定事件
for(var i=0;i<$('.dot').length;i++){
    //方法1 闭包
         $('.dot')[i].onclick = (function(n){
             return function(){
         dot(n);
        $('ul').style.left = - liw*n +'px';
            //将dot点击事件结果与button对应
         count = n;
            }
         })(i);
        // console.log($('.dot')[i])

          //方法2,与this绑定      
        // index 为自定义属性,形参作用;
         $('.dot')[i].index = i;
         $('.dot')[i].onclick = function(){
              count = this.index;
            $('ul').style.left = - liw*count +'px';          
            dot(count);
            console.log(i)
            console.log( this.index)
            console.log( $('.dot')[this.index])
         }
    }