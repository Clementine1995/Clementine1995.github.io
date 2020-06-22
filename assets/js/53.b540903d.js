(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{399:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一些css属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些css属性"}},[t._v("#")]),t._v(" 一些css属性")]),t._v(" "),s("h2",{attrs:{id:"text-rendering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-rendering"}},[t._v("#")]),t._v(" text-rendering")]),t._v(" "),s("p",[t._v("text-rendering CSS 属性定义浏览器渲染引擎如何渲染字体。浏览器会在速度、清晰度、几何精度之间进行权衡。")]),t._v(" "),s("p",[t._v("注意：该属性是 SVG 的属性而不是标准的 CSS 属性。但是 Gecko（Firefox） 和 Webkit（Chrome、Safari） 内核的浏览器允许该属性在 Windows、Mac OS 和 Linux 操作系统中应用于 HTML 和 XML 内容。")]),t._v(" "),s("p",[t._v("一个视觉上很明显的效果是，optimizeLegibility 属性值会在某些字体（比如，微软的 Calibri，Candara，Constantia 和 Corbel 或者 DejaVu 系列字体）小于20px 时把有些相邻字符连接起来。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("text-rendering: auto | optimizeSpeed | optimizeLegibility | geometricPrecision")])]),t._v(" "),s("ul",[s("li",[t._v("auto：浏览器依照某些根据去推测在绘制文本时，何时该优化速度，易读性或者几何精度。")]),t._v(" "),s("li",[t._v("optimizeSpeed：浏览器在绘制文本时将着重考虑渲染速度，而不是易读性和几何精度. 它会使字间距和连字无效。")]),t._v(" "),s("li",[t._v("optimizeLegibility：浏览器在绘制文本时将着重考虑易读性，而不是渲染速度和几何精度.它会使字间距和连字有效。该属性值在移动设备上会造成比较明显的性能问题，详细查看 "),s("a",{attrs:{href:"https://css-tricks.com/almanac/properties/t/text-rendering/",target:"_blank",rel:"noopener noreferrer"}},[t._v("text-rendering"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[t._v("geometricPrecision：浏览器在绘制文本时将着重考虑几何精度， 而不是渲染速度和易读性。字体的某些方面—比如字间距—不再线性缩放，所以该值可以使使用某些字体的文本看起来不错。")])]),t._v(" "),s("p",[t._v("注意：这个 geometricPrecision 特性——当被渲染引擎完全支持时——会使文本缩放是流畅的。对于大比例的缩放，你可能看到并不太漂亮的文本渲染，但这个字体大小是你期望的，而不是被 Windows 或 Linux 系统四舍五入或向下取整的字体大小。 WebKit 准确地的实现了这个值, 但是 Gecko 把这个值按照 optimizeLegibility 处理。")]),t._v(" "),s("h2",{attrs:{id:"font-smoothing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-smoothing"}},[t._v("#")]),t._v(" font-smoothing")]),t._v(" "),s("p",[t._v("font-smooth CSS 属性用来控制字体渲染时的平滑效果。该特性是非标准的，请尽量不要在生产环境中使用它！属性已经在规范中被移除，而且已经不在标准跟踪之中。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("font-smoothing: auto | never | always | <value>")])]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("ul",[s("li",[t._v("Webkit实现了名为-webkit-font-smoothing的相似属性。这个属性仅在 Mac OS X/macOS 下生效。\n"),s("ul",[s("li",[t._v("none - 关闭字体平滑；展示有锯齿边缘的文字。")]),t._v(" "),s("li",[t._v("antialiased - 平滑像素级别的字体，而不是子像素。")]),t._v(" "),s("li",[t._v("subpixel-antialiased - 在大多数非视网膜显示器上，这将会提供最清晰的文字。")])])]),t._v(" "),s("li",[t._v("Firefox 实现了名为 -moz-osx-font-smoothing 的相似属性。这个属性仅在 Mac OS X / macOS 下生效。\n"),s("ul",[s("li",[t._v("auto - 允许浏览器选择字体平滑的优化方式，通常为grayscale。")]),t._v(" "),s("li",[t._v("grayscale - 用灰度抗锯齿渲染文本，而不是子像素。从亚像素渲染切换到黑暗背景上的浅色文本的抗锯齿使其看起来更轻。")])])])]),t._v(" "),s("h2",{attrs:{id:"will-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#will-change"}},[t._v("#")]),t._v(" will-change")]),t._v(" "),s("p",[t._v("CSS 属性 will-change 为web开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。")]),t._v(" "),s("p",[t._v("但是在使用这个属性的时候需要注意：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("不要将 will-change 应用到太多元素上")]),t._v("：浏览器已经尽力尝试去优化一切可以优化的东西了。有一些更强力的优化，如果与 will-change 结合在一起的话，有可能会消耗很多机器资源，如果过度使用的话，可能导致页面响应缓慢或者消耗非常多的资源。")]),t._v(" "),s("li",[s("strong",[t._v("有节制地使用")]),t._v("：通常，当元素恢复到初始状态时，浏览器会丢弃掉之前做的优化工作。但是如果直接在样式表中显式声明了 will-change 属性，则表示目标元素可能会经常变化，浏览器会将优化工作保存得比之前更久。所以最佳实践是当元素变化之前和之后通过脚本来切换 will-change 的值。")]),t._v(" "),s("li",[s("strong",[t._v("不要过早应用 will-change 优化")]),t._v("：如果你的页面在性能方面没什么问题，则不要添加 will-change 属性来榨取一丁点的速度。 will-change 的设计初衷是作为最后的优化手段，用来尝试解决现有的性能问题。它不应该被用来预防性能问题。过度使用 will-change 会导致大量的内存占用，并会导致更复杂的渲染过程，因为浏览器会试图准备可能存在的变化过程。这会导致更严重的性能问题。")]),t._v(" "),s("li",[s("strong",[t._v("给它足够的工作时间")]),t._v("：这个属性是用来让页面开发者告知浏览器哪些属性可能会变化的。然后浏览器可以选择在变化发生前提前去做一些优化工作。所以给浏览器一点时间去真正做这些优化工作是非常重要的。使用时需要尝试去找到一些方法提前一定时间获知元素可能发生的变化，然后为它加上 will-change 属性。")])]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("will-change: auto | <animateable-feature>")])]),t._v(" "),s("ul",[s("li",[t._v("auto：表示没有特别指定哪些属性会变化，浏览器需要自己去猜，然后使用浏览器经常使用的一些常规方法优化。")]),t._v(" "),s("li",[s("code",[t._v("<animateable-feature>")]),t._v(" 可以是以下值：\n"),s("ul",[s("li",[t._v("scroll-position：表示开发者希望在不久后改变滚动条的位置或者使之产生动画。")]),t._v(" "),s("li",[t._v("contents：表示开发者希望在不久后改变元素内容中的某些东西，或者使它们产生动画。")]),t._v(" "),s("li",[s("code",[t._v("<custom-ident>")]),t._v("：表示开发者希望在不久后改变指定的属性名或者使之产生动画。如果属性名是简写，则代表所有与之对应的简写或者全写的属性。")])])])]),t._v(" "),s("p",[t._v("正确使用应该是通过js脚本来控制它")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当鼠标移动到该元素上时给该元素设置 will-change 属性")]),t._v("\nel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseenter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hintBrowser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当 CSS 动画结束后清除 will-change 属性")]),t._v("\nel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'animationEnd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" removeHint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hintBrowser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填写上那些你知道的，会在 CSS 动画中发生改变的 CSS 属性名们")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("willChange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transform, opacity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeHint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("willChange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"contain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contain"}},[t._v("#")]),t._v(" contain")]),t._v(" "),s("p",[t._v("contain 属性允许开发者声明当前元素和它的内容尽可能的独立于 DOM 树的其他部分。这使得浏览器在重新计算布局、样式、绘图或它们的组合的时候，只会影响到有限的 DOM 区域，而不是整个页面。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("contain: none | strict | content | size | layout | style | paint")])]),t._v(" "),s("ul",[s("li",[t._v("none：声明元素正常渲染，没有包含规则。")]),t._v(" "),s("li",[t._v("strict：声明所有的包含规则应用于这个元素。这样写等价于 contain: size layout style paint。")]),t._v(" "),s("li",[t._v("content：声明这个元素上有除了 size 外的所有包含规则。等价于 contain: layout style paint。")]),t._v(" "),s("li",[t._v("size：声明这个元素的尺寸计算不依赖于它的子孙元素的尺寸。")]),t._v(" "),s("li",[t._v("layout：声明没有外部元素可以影响它内部的布局，反之亦然。")]),t._v(" "),s("li",[t._v("style：声明那些同时会影响这个元素和其子孙元素的属性，都在这个元素的包含范围内。")]),t._v(" "),s("li",[t._v("paint：声明这个元素的子孙节点不会在它边缘外显示。如果一个元素在视窗外或因其他原因导致不可见，则同样保证它的子孙节点不会被显示。")])]),t._v(" "),s("h3",{attrs:{id:"paint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paint"}},[t._v("#")]),t._v(" Paint")]),t._v(" "),s("p",[t._v("这个值打开该元素的绘制控制。这确保包含元素的后代节点不显示在其边界外，因此，如果一个元素在屏幕外或是不可见的，它的后代节点同样也被保证是不可见的。\n不过它有几个副作用：")]),t._v(" "),s("ul",[s("li",[t._v("它充当绝对定位和固定定位元素的包含块。这意味着任何孩子节点都基于拥有contain: paint的元素下定位，没有其他父元素，比如-说-文档。")]),t._v(" "),s("li",[t._v("它成为层叠上下文。这意味着如z-index等属性将对元素起作用，孩子节点将根据新的上下文被堆叠。")]),t._v(" "),s("li",[t._v("它成为一个新的格式上下文。这意味着，举例来说，如果有一个paint containment的块级元素，它将被作为一个新的，独立的布局环境。这意味着元素的外布局不会影响包含元素的孩子节点。")])]),t._v(" "),s("h3",{attrs:{id:"style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[t._v("#")]),t._v(" Style")]),t._v(" "),s("p",[t._v("这个值打开该元素的样式控制。这确保了，对于性能这会不仅仅作用于一个元素及其后代，这些效果也不忽视包含的元素。")]),t._v(" "),s("p",[t._v("它很难预测改变一个元素的样式会返回给DOM树什么影响。这方面的例子如 CSS counters，其中在一个孩子节点改变计数器，可以影响文档中其他地方使用到的相同名称的计数器值。若设置contain: style，样式的改变不会传播回到过去包含的元素。")]),t._v(" "),s("h3",{attrs:{id:"size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" Size")]),t._v(" "),s("p",[t._v("这个值打开该元素的尺寸控制。这确保包含元素可以无需检查其后代节点进行布局。")]),t._v(" "),s("p",[t._v("contain: size意思是其子元素不影响父元素的大小，它被推断或声明的尺寸将会被使用。因此，如果你设置contain: size但没有指定元素尺寸（直接或通过flex属性），它将按0像素乘0像素渲染！")]),t._v(" "),s("h3",{attrs:{id:"layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),s("p",[t._v("这个值打开该元素的布局控制。这确保所包含元素对布局目的完全不透明；外部不能影响其内部布局，反之亦然。")]),t._v(" "),s("p",[t._v("布局通常是文档的范围，与DOM结构大小规模成比例，因此，如果你改变一个元素的left属性(作为示例)，那么DOM中的每个元素可能需要进行检查。这里使containment可能把元素数量减少到极少数，而不是整个文档，节省了浏览器大量的不必要工作和显著提高性能。")]),t._v(" "),s("h2",{attrs:{id:"object-fit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-fit"}},[t._v("#")]),t._v(" object-fit")]),t._v(" "),s("p",[t._v("object-fit CSS 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。通过使用 object-position 属性来切换被替换元素的内容对象在元素框内的对齐方式。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("object-fit: fill | contain | cover | none | scale-down")])]),t._v(" "),s("ul",[s("li",[t._v("contain：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。")]),t._v(" "),s("li",[t._v("cover：被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。")]),t._v(" "),s("li",[t._v("fill：被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。")]),t._v(" "),s("li",[t._v("none：被替换的内容将保持其原有的尺寸。")]),t._v(" "),s("li",[t._v("scale-down：内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。")])]),t._v(" "),s("h2",{attrs:{id:"object-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-position"}},[t._v("#")]),t._v(" object-position")]),t._v(" "),s("p",[t._v("CSS 属性 object-position 规定了可替换元素的内容，在这里我们称其为对象，在其内容框中的位置。可替换元素的内容框中未被对象所覆盖的部分，则会显示该元素的背景（background）。")]),t._v(" "),s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <position> values */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <position>使用 1 到 4 个值来定义该元素在它所处的二维平面中的定位。可以使用相对或绝对偏移。 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Global values */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" initial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"text-align-last"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-align-last"}},[t._v("#")]),t._v(" text-align-last")]),t._v(" "),s("p",[t._v("CSS 属性 text-align-last 描述的是一段文本中最后一行在被强制换行之前的对齐规则。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("text-align-last: auto | start | end | left | right | center | justify")])]),t._v(" "),s("p",[t._v("属性值：")]),t._v(" "),s("ul",[s("li",[t._v("auto\n每一行的对齐规则由 text-align 的值来确定，当 text-align 的值是 justify，text-align-last 的表现和设置了 start 的表现是一样的，即如果文本的展示方向是从左到右，则最后一行左侧对齐与内容盒子。\n译者注：\n经测试，当 text-align 的值为 right，并且 text-align-last 设置为 auto 时，文本最后一行的对齐方式相当于 text-align-last 被设置为 right 时的效果。即 text-align-last 设置为 auto 后的表现跟 text-align 的设置有关。")]),t._v(" "),s("li",[t._v("start\n与 direction 的设置有关。\n如果文本展示方向是从左到右，起点在左侧，则是左对齐；\n如果文本展示方向是从右到左，起点在右侧，则是右对齐。\n如果没有设置 direction ，则按照浏览器文本的默认显示方向来确定。")]),t._v(" "),s("li",[t._v("end\n与 direction 的设置有关。\n如果文本展示方向是从左到右，末尾在右侧，则是右对齐；\n如果文本展示方向是从右到左，末尾在左侧，则是左对齐。\n如果没有设置 direction ，则按照浏览器文本的默认显示方向来确定。")]),t._v(" "),s("li",[t._v("left\n最后一行文字与内容盒子的左侧对齐")]),t._v(" "),s("li",[t._v("right\n最后一行文字与内容盒子的右侧对齐")]),t._v(" "),s("li",[t._v("center\n最后一行文字与内容盒子居中对齐")]),t._v(" "),s("li",[t._v("justify\n最后一行文字的开头与内容盒子的左侧对齐，末尾与右侧对齐。")])]),t._v(" "),s("h2",{attrs:{id:"placeholder-shown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placeholder-shown"}},[t._v("#")]),t._v(" :placeholder-shown")]),t._v(" "),s("p",[t._v(":placeholder-shown CSS 伪类 在 "),s("code",[t._v("<input>")]),t._v(" 或 "),s("code",[t._v("<textarea>")]),t._v(" 元素显示 placeholder text 时生效.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择所有显示占位符(placeholder)的元素 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":placeholder-shown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid silver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"resize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resize"}},[t._v("#")]),t._v(" resize")]),t._v(" "),s("p",[t._v("resize CSS 属性允许你控制一个元素的可调整大小性。注意：如果一个block元素的 overflow 属性被设置成了visible，那么resize属性对该元素无效。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("resize: none | both | horizontal | vertical | block | inline")])]),t._v(" "),s("p",[t._v("取值")]),t._v(" "),s("ul",[s("li",[t._v("none：元素不能被用户缩放。")]),t._v(" "),s("li",[t._v("both：允许用户在水平和垂直方向上调整元素的大小。")]),t._v(" "),s("li",[t._v("horizontal：允许用户在水平方向上调整元素的大小。")]),t._v(" "),s("li",[t._v("vertical：允许用户在垂直方向上调整元素的大小。")]),t._v(" "),s("li",[t._v("block：依赖于 writing-mode 以及它的 direction 取值，元素显示一种机制，允许用户在块方向上水平或垂直地调整元素的大小。")]),t._v(" "),s("li",[t._v("inline：依赖于 writing-mode 以及它的 direction 取值，元素显示一种机制，允许用户在行内方向上水平或垂直地调整元素的大小。")])]),t._v(" "),s("h2",{attrs:{id:"selection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selection"}},[t._v("#")]),t._v(" ::selection")]),t._v(" "),s("p",[t._v("::selection CSS伪元素应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。")]),t._v(" "),s("p",[t._v("只有一小部分CSS属性可以用于::selection 选择器：")]),t._v(" "),s("ul",[s("li",[t._v("color")]),t._v(" "),s("li",[t._v("background-color")]),t._v(" "),s("li",[t._v("cursor")]),t._v(" "),s("li",[t._v("caret-color")]),t._v(" "),s("li",[t._v("outline and its longhands")]),t._v(" "),s("li",[t._v("text-decoration and its associated properties")]),t._v(" "),s("li",[t._v("text-emphasis-color")]),t._v(" "),s("li",[t._v("text-shadow")])]),t._v(" "),s("p",[t._v("要特别注意的是，background-image 会如同其他属性一样被忽略。")]),t._v(" "),s("h2",{attrs:{id:"caret-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caret-color"}},[t._v("#")]),t._v(" caret-color")]),t._v(" "),s("p",[t._v("caret-color 属性用来定义插入光标（caret）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 | 的东西。")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("caret-color: auto | <color>")])]),t._v(" "),s("p",[t._v("取值")]),t._v(" "),s("ul",[s("li",[t._v("auto：默认颜色，此时浏览器应该用 currentcolor 来作为插入光标的颜色，但浏览器可能还会根据当前的背景色、阴影色等来对该颜色进行适当的调整以确保该插入光标具有良好的可见性。")]),t._v(" "),s("li",[s("code",[t._v("<color>")]),t._v("：所指定的插入光标的颜色值.")])]),t._v(" "),s("h2",{attrs:{id:"mask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mask"}},[t._v("#")]),t._v(" mask")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Mask"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"appearance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appearance"}},[t._v("#")]),t._v(" appearance")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/appearance",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Appearance"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[t._v("#")]),t._v(" :target")]),t._v(" "),s("p",[t._v(":target CSS 伪类 代表一个唯一的页面元素(目标元素)，其id 与当前URL片段匹配.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择一个ID与当前URL片段匹配的元素*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("例如, 以下URL拥有一个片段 (以#标识的) ，该片段指向一个ID为section2的页面元素:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("http://www.example.com/index.html#section2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("若当前URL等于上面的URL，下面的元素可以通过 :target选择器被选中：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("section2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Example"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"media-print"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media-print"}},[t._v("#")]),t._v(' media="print"')]),t._v(" "),s("p",[t._v("利用 CSS3 媒体查询的能力，添加 media=print 的样式表，隐藏打印时不希望显示的部分，并调整需要打印部分的显示效果。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".other, .main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".other")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("print"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-print-color-adjust")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exact "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 加入下面这段 CSS 使得打印时首选“背景图形” */")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color-adjust")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exact "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".other")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br")])]),s("h2",{attrs:{id:"scroll-snap-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll-snap-type"}},[t._v("#")]),t._v(" scroll-snap-type")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5de9c00ce51d4557f544f03d",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 scroll-snap-type 优化滚动"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN(scroll-snap-type)"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"box-decoration-break"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-decoration-break"}},[t._v("#")]),t._v(" box-decoration-break")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c77457951882540447df818",target:"_blank",rel:"noopener noreferrer"}},[t._v("有趣的 box-decoration-break"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);