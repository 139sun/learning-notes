### offset  家族
    - style.width
    - style.left 获取的是1位小数 返回带px的string
    - offsetWidth 只可读对应.style.Width//包括滚动条
        - 元素的content + padding+border
    - offsetHeight
    - offsetLeft    //整数 只可读 number类型
        - 子元素border外边界相对于父元素border内边界(或者padding外边界)的距离
    - offsetTop
       
    - offsetParent
        - 返回距离最近的有定位的父元素
#### 事件对象event
    - event.offsetX/Y
    - e.pageX/Y
    - e.clientX/Y
    - e.screenX/Y
#####  阻止冒泡

> `event.stopPropagation();`		存在兼容问题	(面试题)
> IE <= 10 专用 `event.cancelBubble = true`
> 兼容写法 `event.stopPropagation?event.stopPropagation():event.cancelBubble = true;
### scroll 家族
    - scrollWidth   content + 上下padding
     父元素:(没有滚动条只显示上左padding)  如果内容溢出:内容宽高 + padding,
     如果有滚动条为左边padding+内部盒子offsetWidth)
    - scrollHeight
    - scrollLeft    元素被卷进去的宽度
    - document.documentElement.scrollTop
    // 封装函数获取被页面卷入的高度
    - function sct (){
	    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        }
    // 封装函数获取被页面卷入的左边距
        function scl (){
	        return document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
        }
    - onscroll 事件
    - window.scroll(0,0)
    - window.scrollTo(0,0)
    - window.scrollBy(X,Y)
### style : opacity =(0,1) 不透明度
### client 家族
    - clientWidth content+padding
   //不包括(减去内部子元素的)滚动条,可视区域的宽高
   
    - clientHeight
    - clientLeft    左border
    - clientTop
## 更改元素样式
### 获取元素样式
#### 获取内联(行内)样式
    - element.style.styleName
#### 获取内联和外联样式
    - function getStyle(ele,styleName){
	if(ele.currentStyle){
		return ele.currentStyle[styleName];
	}else{
		return window.getComputedStyle(ele,null)[styleName];
	}
}
### 更改单个样式动画函数

### 更改多个样式函数
    function manyStyle(ele,obj){
        clearInterval(ele.timer)       
        var ele.timer = setInterval(function(){
            var block = true;
            for(i in obj){
                if(i === 'zIndex'){
                    ele.style[i] = obj(i);
                    continue;
                }else if(i === 'opacity'){
                    var start = parseInt(getComputedStyle(ele, null)[i]*10);
                    var target = obj[i]*10;
                }else{
                var start = parseInt(getComputedStyle(ele, null)[i]);
                var target = obj[i];
                var step = (target - start)/10;
                }
                if(Math .abs(step)<1){
                    step = step >0?1:Math.floor(step);
                }
                if(i === 'opacity'){
                    ele.style[i] = (start + step )/10;
                }else{
                ele.style[i] = start + step +'px';
                }
                if(start + step != target){
                   block = false;
                }             
            }
              if(block){
                    clearInterval(ele.timer);
                }
           
        },17) 
### 清除定时器
        - 将定时器声明为一个全局变量
        - 将定时器绑定元素ele.timer

### 获取对象属性

