## 表单<form>
*登记页面*

<form action="" method="get"> 
	<!-- action 表单提交地址; method 提交方式:get/post -->
	<fieldset>
		<legend>用户基础信息</legend>
		<!-- fieldset legend实现表单分组 -->
		<!-- type 属性的不同text password checkbox radio submit(除了下拉框select option)以实现不同的功能 -->
		<!-- input 单标签 -->
		用户名: <input readonly name="username" type="text">
		密码: <input disabled name="password" type="password">
		<br>
		<label for="">
		<!-- label标签常用于与checkbox或radio关联，以实现点击文字也能选中/取消checkbox或radio -->
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

### 列表
1. 有序列表/无序列表/自定义列表
> ul li / ol li  / dl dt/dd
 	- a:link {color: #FF0000} /* 未访问时的状态 */
 	- a:visited {color: #00FF00} /* 已访问过的状态 */
	- a:hover {color: #FF00FF} /* 鼠标移动到链接上时的状态 */
	- a:active {color: #0000FF} /* 鼠标按下去时的状态 */


###  img src ="路径问题"
- 相对路径 相对当前文件的位置 
	- ../img/xx.png 上一级文件
	- img/xx.png 下一级文件夹
	- xx.png 当前文件夹
- 绝对路径 分为本地和网络位置(一般不采用)

###标签
- pre标签 块状元素 常用来表示计算机源代码 只能包含文本或者行内元素,不会改变原有格式

>alt="图片未找到的代替申明"
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
 <iframe src="https://www.baidu.com"  framebord=2px width=200px height=100px target="-blank"></iframe>  <br>
target="" _self
		_top
		_father


###元素种类
- 块状元素 自动换行 设置宽高有效
ul ol div  table form h p
- 行内块元素 不会自动换行 设置宽高有效
img input button
- 行内元素 不会自动换行 设置宽高无效
a  span 

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

### 背景图片
background : [color] [url()]  [no-repeat] [posotion:左右/上下] [fixed/scroll]
### 盒子模型
- 盒子内部
	- content:width height
	- padding:top/right/bottom/left
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
- 在最后一个盒子设置clear属性来清除浮动对父类盒子的影响

### 定位 position
- 相对定位 relative
- 绝对定位 absolute
- 固定定位 fixed
- staic 默认值 无定位
- inherit 从父元素继承定位属性

