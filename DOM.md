### 事件三要素
     - 事件源 事件触发 事件处理
     - js 任务:获取事件源 绑定事件 进行任务处理
## 获取节点
    - 获取元素  //包装成document对象    
        - document.getElementById('dome');
        - document.getELementsByTagName('div')[0];      //切记不要忘了[0]
        - doucment. getElementsByClassName('dot')[0];
    - 通过已知元素的属性获取节点
        - node.parentNode;//父节点
        - 兄弟节点(存在浏览器兼容问题,兼容写法位置不能交换)
            - var nodeName = node.NextElementSibling || node.NextSibling
            - var nodeName = node.PreviousElementSibling || node.PreviousSibling
        - 单个子节点
            - firstChild       //第一个节点
            - firdtElementChild//第一个元素节点
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
                    return myChrildren;
                }
            - 找出兄弟节点 block方法
            function getNextSilbing(node){        
            var parentnode = node.parentNode;
            var childrenNode = parentnode.children
            var nextSilbing = [];
            var lock = false;               //block
            for(var i in childrenNode){
                if(childrenNode[i].nodeType == 1){
                    if(childrenNode[i]==node){
                        lock = true;
                    }else{
                        if(lock){
                            nextSilbing.push(childrenNode[i])
                        }
                    }
                }
            }
            return nextSilbing;
         }
## 操作节点
   
    1. 创建节点
     - var node = document.createElement('img')
    2. 插入节点
    - parentNode .appendChild(node) 
    - parentNode.insertBefor(nextNode,node)
    3. 删除节点
    - parentNode.removeChild(node)
    - node.parentNode.removeChild(node)//不知道父节点的情况
    4. 复制节点
    - node.cloneNode(true/false)
## 操作节点属性
    - 设置：setAttribute('属性名称', '新的属性值')//所有属性值全部替换,不要忘记()
    - 删除：removeAttribute(名称)            //所有属性值都被删除
    - 获取  getAttribute('名称')               //所有属性值  返回string 
    -  /**
        * 添加一个类名的封装函数
        * @param {*} el  要添加类名的节点
        * @param {*} classVaule  要添加的类名
        */
    function addClass(el, classVaule){
        var newStr = '';
        var oldClass = el.getAttribute('class');
        var oldArr  = oldClass.split(' ');
        var result = oldArr.indexOf(classVaule);
        if(result === -1){
            // oldArr.push(classVaule);
            // newStr = oldArr.join(' ');
             newStr = oldClass +' '+ classVaule;
            el.setAttribute('class',newStr);
        }        
    }
    -  /**
        * 删除一个类名的封装函数
        * @param {*} el 要删除类名的节点
        * @param {*} classVaule 要删除的类名
        */
        function delClass(el,classVaule){
        var newStr = '';
        var oldClass = el.getAttribute('class');
        var oldArr = oldClass.split(' ');
        var result = oldArr.indexOf(classVaule);
        if(result !== -1){
            oldArr.splice(result,1);
            newStr = oldArr.join(' ');
            el.setAttribute('class' , newStr);
        }      
    }


## 操作内容         
    - parentNOde.vaule = "内容"//只对表单生效
    - node.innerText    = 'value'
    - node.innerHTML    = '<img scr= "" atl="">'

