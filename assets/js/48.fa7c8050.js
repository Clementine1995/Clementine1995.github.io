(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{394:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css-border用法详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-border用法详解"}},[t._v("#")]),t._v(" CSS Border用法详解")]),t._v(" "),s("blockquote",[s("p",[t._v("文章参考自"),s("a",{attrs:{href:"https://github.com/junruchen/junruchen.github.io/wiki/CSS-Border%E7%94%A8%E6%B3%95%E8%AF%A6%E8%A7%A3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Border用法详解"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),s("ul",[s("li",[t._v("透明边框的实现")]),t._v(" "),s("li",[t._v("多层边框的几种实现方法")]),t._v(" "),s("li",[t._v("border-radius 圆角的使用")]),t._v(" "),s("li",[t._v("border-image 边框背景详解")]),t._v(" "),s("li",[t._v("box-shadow 邻边投影、单侧投影、对边投影以及一些虚线边框等特殊元素的不规则阴影使用")])]),t._v(" "),s("h3",{attrs:{id:"透明边框的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#透明边框的实现"}},[t._v("#")]),t._v(" 透明边框的实现")]),t._v(" "),s("p",[t._v("要求: 给内部盒子设置一个透明边框, 可以看到外层盒子的背景。")]),t._v(" "),s("p",[t._v("dom结构:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("border-item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("内部盒子区"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("效果图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/5db3a01f9cef299c331a61fb33f6eab3a338d16d/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137326639303030316664323930323834303139322e706e67",alt:"透明边框"}})]),t._v(" "),s("p",[t._v("浏览器默认从边框外沿剪裁背景图, 所以为了使边框透明, 需将浏览器的剪裁范围缩小到内边距的外沿, 而 background-clip 属性正好可以实现此效果。")]),t._v(" "),s("p",[t._v("background-clip 属性的默认值为 border-box , 即浏览器默认剪裁背景到边框外边框, 可将它的值设为 padding-box , 这样浏览器就会从内边距的外沿来剪裁背景。")]),t._v(" "),s("p",[t._v("代码示例")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("backrgound-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px solid "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-clip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-box "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"多层边框的几种实现方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多层边框的几种实现方法"}},[t._v("#")]),t._v(" 多层边框的几种实现方法")]),t._v(" "),s("p",[t._v("以下效果均只使用一个元素实现。")]),t._v(" "),s("p",[t._v("常见的实现方法有两种, box-shadow 方案以及 outline 方案。")]),t._v(" "),s("p",[t._v("效果图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/bb661e17afd91ac70cac222906fbaa3c250339a9/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137343566303030313465666130353538303135322e706e67",alt:"多层边框"}})]),t._v(" "),s("p",[t._v("利用 "),s("code",[t._v("box-shadow")]),t._v(" 实现多重边框, 不会影响布局, 不受 "),s("code",[t._v("box-sizing")]),t._v(" 影响, 可通过内外边距来模拟边框所需占据的空间。")]),t._v(" "),s("p",[t._v("代码示例：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #fb3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #58a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 5px #58a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0 0 0 5px #fb3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("注意: outline 描边绝大多数情况下都是矩形, 所以如果想实现带圆角的多重边框, 可以选择使用 box-shadow 。")]),t._v(" "),s("p",[t._v("圆角情况下outline描边效果图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/8e0d56debc4a7272f71c6e93daf4d1fe2247c741/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137353636303030316562396430323534303133342e706e67",alt:"outline描边"}})]),t._v(" "),s("h3",{attrs:{id:"border-radius-圆角的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-radius-圆角的使用"}},[t._v("#")]),t._v(" border-radius 圆角的使用")]),t._v(" "),s("h4",{attrs:{id:"属性说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性说明"}},[t._v("#")]),t._v(" 属性说明")]),t._v(" "),s("p",[t._v("IE9+、Firefox 4+、Chrome、Safari 5+ 以及 Opera 支持 border-radius 属性。")]),t._v(" "),s("p",[t._v("border-radius是一个简写属性, 分别指定左上角[border-top-left-radius]、右上角[border-top-right-radius]、右下角[border-bottom-right-radius]、左下角[border-bottom-left-radius]的圆角半径。")]),t._v(" "),s("p",[t._v('border-radius 可以分别设置水平半径和垂直半径, 以 "/" 分隔, 水平和垂直半径都可以设置1-4个值,分别指定四个角的半径, 可以是具体的长度值也可以是百分比。 如: border-radius: 50% / 20%; 斜线"/"之前的表示四个角的水平半径均为50%, 之后的表示四个角的垂直半径均为20%。')]),t._v(" "),s("p",[t._v("不论是水平半径还是垂直半径都遵循以下规则:")]),t._v(" "),s("ul",[s("li",[t._v("如果只设置一个值，将用于全部的四个角;")]),t._v(" "),s("li",[t._v("如果设置两个值，第一个用于左上角、右下角，第二个用于右上角、左下角;")]),t._v(" "),s("li",[t._v("如果设置三个值，第一个用于左上角，第二个用于右上角和左下角，第三个用于右下角。[可以联想margin]")])]),t._v(" "),s("h4",{attrs:{id:"自适应椭圆的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自适应椭圆的实现"}},[t._v("#")]),t._v(" 自适应椭圆的实现")]),t._v(" "),s("p",[t._v("这里需要使用百分比。")]),t._v(" "),s("p",[t._v("代码示例:")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50% /50% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  或者\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("注意: "),s("strong",[t._v("这里设置的百分比不论是单独指定水平半径、垂直半径还是统一指定, 均是根据百分比, 分别相对 border box 的宽度和高度进行计算。也就是说相同的百分比可能会计算出不同的水平和垂直半径。")])]),t._v(" "),s("p",[t._v("比如设置 border-radius: 50% , border box的宽度高度分别是200px 100px, 则根据50%计算出的水平半径为100px, 垂直半径为50px。")]),t._v(" "),s("p",[t._v("效果图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/c5ad20ff304cb327ce70e6308c0281d41b7bd65d/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137373339303030316266376230323535303133392e706e67",alt:"椭圆"}})]),t._v(" "),s("h4",{attrs:{id:"_50-和100-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_50-和100-的区别"}},[t._v("#")]),t._v(" 50%和100%的区别")]),t._v(" "),s("p",[t._v("通常我们都是用 CSS 的 border-radius 属性实现圆形：先画一个方形，然后将它的 border-radius 设置成50%。但是将 border-radius 设置为100%，也可以实现同样的效果，W3C对于重合曲线有这样的规范：如果两个相邻角的半径和超过了对应的盒子的边的长度，那么浏览器要重新计算保证它们不会重合。它会导致浏览器进行不必要的计算，所以建议使用50%，但是值为50%与100%在动画效果表上有所不同。")]),t._v(" "),s("h4",{attrs:{id:"自适应半椭圆以及自适应四分之一椭圆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自适应半椭圆以及自适应四分之一椭圆"}},[t._v("#")]),t._v(" 自适应半椭圆以及自适应四分之一椭圆")]),t._v(" "),s("p",[t._v("效果图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/fee2bdb2d714b929b2385789e4ae847166f459f6/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137373865303030313839636230353030303134312e706e67",alt:"半椭圆 1/4椭圆"}})]),t._v(" "),s("p",[t._v("上图中半椭圆水平对称, 所以左上角和左下角的半径相等, 右上角和右下角的半径相等;")]),t._v(" "),s("p",[t._v("图中整个左侧是一条曲线且占据了整个宽度, 也就是说左上角和左下角的垂直半径之和等于整个形状的高度, 水平半径应该为整个形状的宽度; 而右侧没有任何圆角, 所以右上角的右下角的垂直半径之和也应该为整个形状的高度, 水平方向为0。")]),t._v(" "),s("p",[t._v("观察上图中的四分之一椭圆, 很容易可以看出整个圆角都集中在左上角, 而其他三个角都没有圆角。")]),t._v(" "),s("p",[t._v("代码示例：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("半椭圆 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% 0 0 100% / 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n1/4"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("椭圆border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% 0 0 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"其他形状多变的圆角效果图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他形状多变的圆角效果图"}},[t._v("#")]),t._v(" 其他形状多变的圆角效果图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/a9e3feaa7705f28c5052517374905944289bf5d8/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137383732303030313833663630373331303039352e706e67",alt:"圆角效果图"}})]),t._v(" "),s("p",[t._v("代码示例")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("1、 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50% / 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n2、 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10% / 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n3、 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10% 50% / 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n4、 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% 10% 10% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n5、 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40% 40% 20% 20% / 100% 100% 50% 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("注意: **当任意两个相邻圆角的半径之和超过border box的尺寸时, 用户代理必须按比例减小各个边框所使用的值, 直到它们不会相互重叠为止。**拿上图中最后一个图形举例说明。")]),t._v(" "),s("p",[t._v("假设盒子的宽高分别为: 800px 400px, 按照border-radius设置的百分比半径, 分别计算:")]),t._v(" "),s("p",[t._v("左上角半径：320px 400px 右上角半径：320px 400px")]),t._v(" "),s("p",[t._v("左下角半径：160px 200px 右下角半径：160px 200px")]),t._v(" "),s("p",[t._v("很明显, 此时左上角和左下角的垂直半径之和[400px+200px]大于盒子的高度[400px], 同理右上角和右下角的垂直半径之和也大于盒子的高度。")]),t._v(" "),s("p",[t._v("根据上述理论, 用户代理必须按比例减小各个边框所使用的值, 直到它们不会相互重叠为止。当然按比例缩小这一步操作是由浏览器完成, 下面只是模拟浏览器绘制圆角边框的过程。")]),t._v(" "),s("p",[t._v("缩小后的半径为:")]),t._v(" "),s("p",[t._v("左上角半径：320px 267px 右上角半径：320px 133px")]),t._v(" "),s("p",[t._v("左下角半径：160px 133px 右下角半径：160px 267px")]),t._v(" "),s("p",[t._v("左上角和左下角根据新的半径, 画圆效果如下图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/a2bd5e77a6a1bb2e7b68965f090735689327b6b2/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137393932303030313665666430383030303533372e706e67",alt:"圆角1"}})]),t._v(" "),s("p",[t._v("最终效果图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/ac4381d82de58945041c32405893b03cb292d078/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137396230303030316161306530383030303533352e706e67",alt:"圆角2"}})]),t._v(" "),s("h3",{attrs:{id:"border-image-边框背景详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image-边框背景详解"}},[t._v("#")]),t._v(" border-image 边框背景详解")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN(border-image)"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("border-image属性可指定边框样式使用图像来填充, 图像可以是绝对或相对地址引入的图片, 也可以是渐变色。使用时, 需指定 border-style 指定边框样式。")]),t._v(" "),s("p",[t._v("IE11+、Firefox 3.5+、Chrome、Safari 以及 Opera 支持 border-image 属性。为支持低版本, 最好增加带有-moz-以及-webkit-前缀的写法。")]),t._v(" "),s("p",[t._v('border-image为简写属性, 可分别设置以下5个属性的值: border-image-source、border-image-slice、border-image-width、border-image-outset、border-image-repeat。 属性间用"/"分隔。')]),t._v(" "),s("h4",{attrs:{id:"_1、border-image-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、border-image-source"}},[t._v("#")]),t._v(" 1、border-image-source")]),t._v(" "),s("p",[t._v("取值: none | image ; 当值为none时, 会自动使用 border-style 的值。")]),t._v(" "),s("h4",{attrs:{id:"_2、border-image-slice-指定图片分隔的长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、border-image-slice-指定图片分隔的长度"}},[t._v("#")]),t._v(" 2、border-image-slice 指定图片分隔的长度")]),t._v(" "),s("p",[t._v("取值: {1,4} [number | %] && fill ; 注意, 使用number时, 默认单位为像素, 所以不需要加上单位, 另外百分比是分别相对盒子的宽和高。")]),t._v(" "),s("p",[t._v("border-image-slice属性指定从上，右，下，左方位来分隔图像，将图像分成4个角，4条边和中间区域共9份，中间区域始终是透明的（即没图像填充），除非加上关键字 fill, 此时中间区域会覆盖背景。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/5b7be3fdd73f09ec0fc14fc1932642eac131cdcc/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137623136303030313233663130373337303237352e706e67",alt:"slice属性"}})]),t._v(" "),s("h4",{attrs:{id:"_3、border-image-width-指定边框背景的宽度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、border-image-width-指定边框背景的宽度"}},[t._v("#")]),t._v(" 3、border-image-width 指定边框背景的宽度")]),t._v(" "),s("p",[t._v("取值: {1,4} number | % | length | auto ; 注意, 这里的number是相对于 border-width 的倍数, 如 border-image-width: 1 ; 如果没有指定 border-image-width 的值, 则取 border-wdith 的值。")]),t._v(" "),s("h4",{attrs:{id:"_4、border-image-outset-指定偏移距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、border-image-outset-指定偏移距离"}},[t._v("#")]),t._v(" 4、border-image-outset 指定偏移距离")]),t._v(" "),s("p",[t._v("取值: {1,4} number | length ; number是相对于 border-width 的倍数。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/1fd34324275d10b83c4467be82569a65f329adf2/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137623330303030316330386630343835303137302e706e67",alt:"outset属性"}})]),t._v(" "),s("h4",{attrs:{id:"_5、border-image-repeat-指定边框背景的平铺方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、border-image-repeat-指定边框背景的平铺方式"}},[t._v("#")]),t._v(" 5、border-image-repeat 指定边框背景的平铺方式")]),t._v(" "),s("p",[t._v("取值: {1,2} 拉伸stretch | 重复repeat | 环绕round ;")]),t._v(" "),s("p",[t._v("可1-2个值, 两个值表示水平[只对上下中起作用]和垂直方向[只对左右中起作用], 平铺可能会改变图片的大小, 而重复不会改变图片的大小。 四个角上的角边框图片是没有任何展示效果的, 不会平铺, 不会重复, 也不会拉伸。")]),t._v(" "),s("p",[t._v("效果图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/4fc5c180e3a79e5b453b0599a3fc07d5e14efc68/687474703a2f2f696d672e6d756b6577616e672e636f6d2f3538383137623362303030316636343030353330303134362e706e67",alt:"repeat属性"}})]),t._v(" "),s("p",[t._v("代码示例")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("第一个效果图代码")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"border-image.png"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-outset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" repeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("第二个效果图代码")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"border-image.png"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" 60 / 20px / 10px round"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h4",{attrs:{id:"border-image的应用实现一个带圆角渐变边框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image的应用实现一个带圆角渐变边框"}},[t._v("#")]),t._v(" border-image的应用实现一个带圆角渐变边框")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5e4a3a20e51d45270c277754",target:"_blank",rel:"noopener noreferrer"}},[t._v("巧妙实现带圆角的渐变边框"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"box-shadow各种投影的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-shadow各种投影的实现"}},[t._v("#")]),t._v(" box-shadow各种投影的实现")]),t._v(" "),s("h4",{attrs:{id:"属性简单介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性简单介绍"}},[t._v("#")]),t._v(" 属性简单介绍")]),t._v(" "),s("p",[t._v("box-shadow有6个参数值：X轴偏移量、Y轴偏移量、模糊距离、扩展距离、颜色值以及inset设置为内阴影。")]),t._v(" "),s("h4",{attrs:{id:"邻边投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邻边投影"}},[t._v("#")]),t._v(" 邻边投影")]),t._v(" "),s("p",[t._v("最简单，如：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px 2px 2px 2px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/5561598c661201b276fdfefd6e33919ac0916e5c/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313530303331352d316230353938623865333532343866652e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f363030",alt:"box-shadow"}})]),t._v(" "),s("p",[t._v("其中模糊距离以及扩展距离是指四个边都有变化，如模糊距离2px，则四个方向上都会进行2px的扩展。利用这一特性，可实现单边阴影。")]),t._v(" "),s("h4",{attrs:{id:"单边投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单边投影"}},[t._v("#")]),t._v(" 单边投影")]),t._v(" "),s("p",[t._v("底边阴影代码示例：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 8px 4px -4px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  //Y轴向下偏移8px，四周模糊4px，扩展-4px，正好抵消掉。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("效果图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/317ef384620f040cd851a30b0117790a93f663ac/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313530303331352d636565363030666432663638626432362e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f363030",alt:"box-shadow1"}})]),t._v(" "),s("h4",{attrs:{id:"对边投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对边投影"}},[t._v("#")]),t._v(" 对边投影")]),t._v(" "),s("p",[t._v("对边阴影实际上就是两个单边阴影")]),t._v(" "),s("p",[t._v("代码示例：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px 0 4px -4px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -8px 0 4px -4px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    //Y轴向下偏移8px，四周模糊4px，扩展-4px，正好抵消掉。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("效果图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/679babd01ebcfa9d3364100f83a526c1b4d1655f/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313530303331352d326430373233323838356633643465662e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f363030",alt:"box-shadow"}})]),t._v(" "),s("h4",{attrs:{id:"box-shadow阴影的特殊情况－－不规则阴影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-shadow阴影的特殊情况－－不规则阴影"}},[t._v("#")]),t._v(" box-shadow阴影的特殊情况－－不规则阴影")]),t._v(" "),s("p",[t._v("使用阴影时经常会遇到伪元素、虚线边框、折角背景等效果，当给这一类元素加上阴影时，往往得不到很好的效果。")]),t._v(" "),s("p",[t._v("使用css3 filter可以很好的解决这一问题。")]),t._v(" "),s("p",[t._v("看图[左边是使用box-shadow的效果，右边是使用filter的效果]：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/5cf34b88659d030b85349f2e2bdcb937166159c9/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313530303331352d613931363132616139316536313632382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430",alt:"filter1"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/0c02608a9ef1dd79b7d969b45c329c38212a32e6/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313530303331352d393265316332336433366165383331312e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430",alt:"filter2"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/e3655b1d8d27c151f7ec81c759b64d54b28aaf43/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313530303331352d636330373438336136616363313263322e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430",alt:"filter3"}})]),t._v(" "),s("p",[t._v("具体不详细讲解，看代码：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("   //左边的阴影\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 4px 4px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n   //右边的阴影\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drop-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0 0 4px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("filter的drop-shadow用法与box-shadow类似，四个属性分别是：x轴y轴扩展半径和模糊距离以及颜色。")]),t._v(" "),s("p",[t._v("需要注意的是：box-shadow兼容性稍微好一些，IE9+；而filter的兼容性差一点，IE13+，android4+")])])}),[],!1,null,null,null);a.default=r.exports}}]);