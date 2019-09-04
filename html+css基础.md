### 表单<form>
*登记页面*

<form action="" method="get/post"> 
	<!-- action 表单提交地址; method 提交方式:get/post -->
	<fieldset>
		<legend>用户基础信息</legend>
		<!-- fieldset legend实现表单分组 -->
		<!-- type 属性的不同text password checkbox radio submit(除了下拉框select option)以实现不同的功能 -->
		<!-- input 单标签 -->
		用户名: <input readonly name="username" type="text">
		密码: <input disabled name="password" type="password" placeholder = "请输入密码>
		<br>
		<label for="id">
		<!-- label标签常用于与checkbox或radio的id关联，以实现点击文字也能选中/取消checkbox或radio -->
		<!-- radio 单选框 -->
			男: <input type="radio" value="1" name="sex">
		</label>
		<label for="">
			女: <input type="radio" value="0" name="sex">
		</label>
		<!-- sex=1-->
		<br>
		爱好: 
		<label for="">
			篮球: <input checked value="1" name="like" type="checkbox">
			<!-- checked 默认选中 checkbox多选 -->
		</label>
		<label for="">
			足球: <input value="2" name="like" type="checkbox">
		</label>
		<label for="">
			乒乓球: <input value="3" name="like" type="checkbox">
		</label>
	</fieldset>	
	<fieldset>
		<legend>补充信息</legend>
		工作年龄: 
		<select name="exp" id="">
			<option value="1">无</option>
			<option selected value="2">1-3年</option>
			<!-- select option下拉框标签 -->
			<!-- selected 默认选中 -->
			<option value="3">3-5年</option>
			<option value="4">5-8年</option>
		</select>
		<!-- exp=2 -->
		<br>
		头像: <input type="file">
		<br>
		<!-- id 唯一标识 不能重复-->
		个人描述: <textarea name="description" id="" cols="30" rows="10">			
		</textarea>
	</fieldset>
		<input type="submit">
</form>

### 表格<table>
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>

### 列表
1. 有序列表/无序列表/自定义列表
> ul li / ol li  / dl dt/dd
### 伪类
 	- a:link {color: #FF0000} /* 未访问时的状态 */
 	- a:visited {color: #00FF00} /* 已访问过的状态 */
	- a:hover {color: #FF00FF} /* 鼠标移动到链接上时的状态 */
	- a:active {color: #0000FF} /* 鼠标按下去时的状态 */


###  img src ="路径问题"
+ 相对路径 相对当前文件的位置 
	- ../xx.png 上一级文件
	- ./img/xx.png 下一级文件夹
	- ./xx.png 当前文件夹, ./可以省略
	- /xx.png 根目录
- 绝对路径 分为本地和网络位置(一般不采用)

###标签
- pre标签 块状元素 常用来表示计算机源代码 只能包含文本或者行内元素,不会改变原有格式
- sub 下标 ;sup 上标
  - H<sub>2</sub>SO<sup>4</sup>


###字体标签
<em> 斜体 </em>
<strong> 强调</strong>
<b> 加粗 </b>
<i>形如span标签,表现与其他文本的不同,常用来做icon的标签</i>
<del>删除线</del>
<ins>下划线</ins>

### a标签
- href="链接跳转地址"
- target="'"跳转方式 :
 _self 当前页面跳转 *默认* <br> 换行符(br)

   _blank 空白页面跳转	

### iframe内联框架 (画中画)
 <iframe src="https://www.baidu.com"  framebord=2px width=200px height=100px target="_blank">
 </iframe>  <br>
	- target=""   _self
			     _top
				 _father


###元素种类
- 块状元素 自动换行 设置宽高有效ul-li div  table form h p
	- (1)能够识别宽高
　　- (2)margin和padding的上下左右均对其有效
	- (3)可以自动换行
　　- (4)多个块状元素标签写在一起，默认排列方式为从上至下　　　　　　　　　　　　　　
	- 宽度缺省是它父级元素的100%，除非设定一个宽度
	- 可以容纳其他内联元素或者其他块元素
- 行内块元素 不会自动换行 设置宽高有效(padding margin 有效)
	- img input button
	- (1)不自动换行
	- (2)能够识别宽高
	- (3)默认排列方式为从左到右
- 行内元素 不会自动换行 设置宽高无效
	- a  span 修饰字体<b>和<i>标签，还有<sub>和<sup>这两个标签可以直接做出平方的效果
	- 对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间
	- 宽度与内容一样宽，且不可改变
	- 设置高度无效，可以通过设置line-height来设置
	- 一般情况下，行内元素只能包含数据和其他行内元素

###元素类型转换 display:
- block 
- inline-block
- inline 

###css单位
- 长度 px em %
- 颜色 预定义:silver green 十六进制:#000/#fff 或者rgba(0,0,0,0.5)

#属性及其继承关系[链接](https://www.jianshu.com/p/fbfc6c751e34)
有继承性的属性：      
1. 字体系列属性       
	- font：组合字体        
	- font-family：规定元素的字体系列      
	- font-weight：设置字体的粗细       
	- font-size：设置字体的尺寸       
	- font-style：定义字体的风格        
	- font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。       
  	-  font-stretch：允许你使文字变宽或变窄。所有主流浏览器都不支持。       
 	 - font-size-adjust：为某个元素规定一个 aspect 值，字体的小写字母 "x" 的高度与"font-size" 高度之间的比率被称为一个字体的 aspect 值。这样就可以保持首选字体的 x-height。  
2. 文本系列属性        
 	- text-indent：文本缩进        
 	- text-align：文本水平对齐       
 	- line-height：行高        
 	- word-spacing：增加或减少单词间的空白（即字间隔）       
	- letter-spacing：增加或减少字符间的空白（字符间距）        
  	- text-transform：控制文本大小写       
	 - direction：规定文本的书写方向        
  	- color：文本颜色  
3. 元素可见性：visibility       
4. 表格布局属性：caption-side、border-collapse、border-spacing、        empty-cells、table-layout     
5. 列表属性：list-style-type、list-style-image、list-style-position、list-style        
6. 生成内容属性：quotes        
7. 光标属性：cursor        
8. 页面样式属性：page、page-break-inside、windows、orphans        
9. 声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、        speech-rate、volume、		voice-family、pitch、pitch-range、        stress、richness、、azimuth、elevation
- 所有元素可以继承的属性：1、元素可见性：visibility、opacity        2、光标属性：cursor 
- 内联元素可以继承的属性:1、字体系列属性        2、除text-indent、text-align之外的文本系列属性
- 块级元素可以继承的属性:1、text-indent、text-align
- 无继承的属性       
 1、display       
 2、文本属性：vertical-align：        text-decoration：        text-shadow：        white-space：        unicode-bidi：       
 3、盒子模型的属性:宽度、高度、内外边距、边框等       
 4、背景属性：背景图片、颜色、位置等       
5、定位属性：浮动、清除浮动、定位position等        
6、生成内容属性:content、counter-reset、counter-increment       
7、轮廓样式属性:outline-style、outline-width、outline-color、outline        
8、页面样式属性:size、page-break-before、page-break-after
- 继承中比较特殊的几点1、a 标签的字体颜色不能被继承1、h1-h6标签字体的大下也是不能被继承的因为它们都有一个默认值


### css选择器
- 类选择器 . 权重10
- ID选择器 # 权重100
- 标签选择器 权重1
行内样式权重1000  *以及继承属性权重0
- 并集选择器 ,
- 交集选择器 
- 后代选择器
- 层选择器
	- div+p div后所有兄弟p标签
	- div~p div后下一个p标签
	- div>p div里边所有的子p

### 背景图片
background : [color] [url()]  [no-repeat] [position:左右/上下] [fixed/scroll]
### 盒子模型
- 盒子内部
	- content:width height
	- padding:top/right/bottom/left
		- 三个数据时:上 左右 下
	- border :5px solid red
- 盒子外部
	- margin:上下/左右
>解决嵌套崩塌问题:父类盒子设置overflow:hidden;
- 行内元素 margin和padding 设置上下无效 左右有效

### 浮动 float
- 元素浮动之后脱离文档流
- 只有在碰到父类盒子或者浮动的另一个元素才会停下来
- 浮动之后属性变为块状元素,即使设置display:inline 也无法改变
- 当一个元素浮动之后,宽度会被内容撑开,所以要在浮动之前设置盒子宽度
- 在父类盒子最后添加一个空盒子设置clear属性来清除浮动对父类盒子高度的影响
- 子类盒子若有一个设置浮动,所有盒子都得设置浮动,所以不到不得已不用浮动和定位,尽量用文档流

### 定位 position
- 相对定位 relative
- 绝对定位 absolute
- 固定定位 fixed
- static 默认 没有定位 文档流
 - sticky 粘性定位(relative + fixed)
- inherit 从父元素继承定位属性
#### absolute
1 当父元素设置了除static定位之外的定位的时候，（也就是说父元素可以是absolute relative )，子元素相对于父元素定位，可是相对于父元素哪里定位呢？这个时候，基准是父元素的内容区（也即是content（width+height）+padding区域，不包括border和margin。 
2 当父元素没有设置定位的时候，子元素相对于body进行定位。 
3 子元素定位的边界是包括子元素的 整体 = margin + border + padding + content ;的margin外边界为基准进行定位。


### 弹性盒子flexible box
	- 组成 flex容器(container) flex项目(item)item
		水平的主轴(main axis) 与主轴垂直的交叉轴(cross axis)
	- 容器的属性(作用于子元素)
		- flex-direction
			- 决定主轴(即项目)的方向
			- row(默认)	row-reverse column colunm-reverse
		- flex-wrap
			换行的方式:nowrap(默认 不换行) wrop wrop-reverse(换行,第一行在下方)
		- flex-flow : (默认 row nowrop)
		- justify-content  项目在主轴上的对齐方式
			- flex-start 
			- flex-end 
			- center 
			- space-between 挨着两边 项目之间距离相等
			- space-around
		- align-items 项目在交叉轴上的对齐方式
			flex-start flex-end  center 
			baseline(项目 第一行的文字基线) stretch
		- align-content 多根轴线的对齐方式
		flex-start flex-end center space-around space-between stretch
	- 项目的属性(作用于元素自身)
		- order	项目的排列顺序 123 越小越靠前 默认0
		- flex-grow	 项目的放大比例 默认0 不放大
		- flex-shrink 项目的缩小比例  默认1 空间不足比例缩小
		- flex-basis	分配空间之前项目占据主轴空间,默认auto 即项目本来的空间
		- flex 以上三个的简写 默认( 0 1 auto) 
		auto(1 1 auto)	none(0 0 auto)
		- align-self 单个项目与其它项目不同的对齐方式 	可覆盖align-items属性
			- auto(默认,继承父元素align-items属性,若无,等同于stretch)
			- flex-star 
			- flex-end
			- center
			- stretch
			- baseline

