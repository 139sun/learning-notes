### 入口函数
- $(document).ready(function({}))
- 简写 $(function(){}) 
- 区别于js入口函数 window.onload = function(){}
     -  不存在覆盖问题
     -  不会等图片加载完成才执行
### jQuery 选择器
- $('div') 标签 类名 id 交集并集后代选择器与css相同
- 层级选择器
     空格 后代所有元素
     >
     +  元素后边的下一个该子元素
     ~  元素后边的所有该子元素
- 过滤选择器
    - $('li:eq(index)') 序号为index的元素
    - :odd(index)   奇数
    - even(index)   偶数
     - gt(index)   大于
      -it(index)   小于
- 筛选选择器
    - $(“a[href]”)
- 属性选择器
    - siblings() 兄弟元素
### DOM与jQuery对象互相转换
- DOM转jQuery
    - element ---> $('element')
-jQuery转DOM
    - $('element') --->$('element')[0]
                或者-->$('element').get(0)

## DOM操作
### 样式
    - $('node').css()获取
    -   .css('color','red') 设置
    -   .css{       //设置多个样式
        color:'red',
        fontSize:'15px'
    }
### 属性操作
    - $('div').attr('class');获取属性
    - $('div').attr('class','name');设置属性
    - $('div').removeAttr('class','name');移除属性
### 内容操作
    - val//针对表单   
    //JQuery获取value值为字符串形式，要经过字符串转化为数字之后才能当成数字使用。          
    //var num = parseInt($("#num").val());
    //多个相同的选择器,只能获取第一个值
    //可以给多个相同的节点同一个值//隐式迭代
    - $('div').html('<p>text</p>);//设置值
    - $('div').text();//取值
### 类名操作
    - $('div').addClass('name')
    - $('div').removeClass('name')
    - $('div').toggleClass('name')//切换
    - $('div').hasClass('name') //判断
### 节点查找
    .sibiling()
    .next()
    .nextAll()
    .nextUntil()
    .prev()
    .prevAll()
    .preUntil()
    .parent()
    .parents()
    .parentUntil()
    .children()
    .find()
### 节点操作
    - 创造节点 var $('node') = $('<p>...</p>')
    - 添加节点 $node.append() //若页面存在此节点,作用为调用页面存在的元素,会清除本来存在的元素,添加一次之后再次添加会覆盖
        - $(selector)appendTo(node)
        - $(selector)prepend(node)//添加到子元素的最前边
        - $(selector)after(node)//兄弟之后
        - $(selector)before(node)
    - 清空
        - $(selector).empty()
        - $(selector).html('')
        - $(selector).remove()//连带父盒子自己也清除了
    - 复制
        - $(selector).clone()
## DOM动画
    - 展示 
        - $().show(2000,function(){}) 
        //function可省略,默认'normal':400ms 可设置slow fast
    - 隐藏 hide
    - 滑入滑出
        - $().slideDown(speed,callback)
        - $().slideUp(speed,callback)
        - 切换效果 .slideToggle()
    - 淡入淡出
        - fadeIn
        - fadeOut
        - fadeToggle
        - $().fadeTo(speed,0.5)//调节透明度,0全透,1不透
    - 自定义动画
    $(selector).animate(styles,speed,easing,callback)
	第一个参数表示：要执行动画的CSS属性（必选）
 	第二个参数表示：执行动画时长（可选）
	第三个参数表示：动画执行完后立即执行的回调函数（可选）
    easing :缓动
    - 停止动画
    .stop(stopAll,goToEnd);
    stopAll  是否全部停止，默认false 停止队列中所有的动画
    goToEnd  是否将停止的动画  停止在当前动画的最后一个状态  

## 事件机制
### 事件绑定
    js原生的onclick对后来添加的元素不起作用,只能用jQuery的on方法,因为
    onclick绑定事件在前,新加载出来的事件在后,而on是通过绑定父元素
    再通过selector来判断寻找新元素
### 解绑
    $(selector).off( “click”, “xx” ,fn);
### 触发
### 事件对象
$('div').on('click',{'name':'孙悟空'},function(e){})//e为event简写  
    event.currentTarget 			等同于this，当前DOM对象(div)
    event.target 					触发事件源，不一定===this
    event.pageX 					鼠标相对于文档左部边缘的位置
     event.data -->{}				传递给事件处理程序的额外数据
    event.stopPropagation()；	阻止事件冒泡
    event.preventDefault(); 	阻止默认行为(eg阻止a链接跳转)
    event.type 					事件类型：click，dbclick…
    event.which 				鼠标的按键类型：左1 中2 右3
    event.keyCode				键盘按键代码

### 链式编程
### 隐式迭代和each遍历
- $('div')若存在多个div会默认迭代一遍,如需对每个单独处理-->
$(selector).each(function(index,element){
    console.log(index,element)
});
 function(index,element) 必需。为每个匹配元素规定运行的函数。 
•index - 选择器的 index 位置 
•element - 当前的元素（也可使用 "this" 选择器)/数组项的值为item
Element是一个 js对象，需要转换成jquery对象
- return false 等同于break
- return true 等同于continue