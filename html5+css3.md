### 新标签
### form表单新特性
### video
## DOM拓展
### 新选择器
    - document.querySelector('')    #Id .className  tagName
    - document.querySelectorAll('')
### 操作类名
    node.classList.add/remove/toggle/contains('classValue')
### 自定义属性
    - <div class="test"  data-name = 'ownValue'></div>
        -console.log($('.test').data-name)
    - <div class="test"  data-my-name = 'ownValue'></div>
            此种命名方式需用小驼峰方式
         -console.log($('.test').data-onName)
### css3选择器
        p[class^='box'] 属性开头
        p[class&='box'] 属性结尾
        p[class*='box'] 包含
##### 伪类选择器
        a:link
        a:visited
        a:hover
        a:active
        li:first-child
        li:last-child
        li:nth-child(n)
        n是支持简单表达式的,n<0时无效 从0开始的自然数,nth-child(0) 无意义
        li:nth-last-child(n)
        li:empty
        li:target===><a href='#li3'>锚点</a>
                        <li id="li3"></li>
##### 伪元素选择器
        E::before(content:'';display:block;)
        E::after (行内元素)
        E::first-letter//文本第一个字母或者字
        E::first-line//第一行
        E::selection//改变选中文本的样式
### 阴影
### 渐变
### 动画
### 2D转换
### 3D效果
### 本地存储localStorage