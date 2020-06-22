(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{398:function(t,s,e){"use strict";e.r(s);var n=e(42),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css改变一些默认行为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css改变一些默认行为"}},[t._v("#")]),t._v(" CSS改变一些默认行为")]),t._v(" "),e("h2",{attrs:{id:"user-select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-select"}},[t._v("#")]),t._v(" user-select")]),t._v(" "),e("p",[t._v("user-select CSS属性，控制着用户能否选中文本。除了在文本框里，它在chrome浏览器中对已加载的文本没有影响。这个属性与JavaScript中的 "),e("strong",[t._v("Selection")]),t._v(" 对象相关。")]),t._v(" "),e("p",[t._v("语法："),e("code",[t._v("user-select: auto | text | none | contain | all")]),t._v("，默认值text")]),t._v(" "),e("p",[t._v("可取值：")]),t._v(" "),e("ul",[e("li",[t._v("none：元素及其子元素的文本不可选中。 请注意这个Selection 对象可以包含这些元素。 从Firefox 21开始， none 表现的像 -moz-none，因此可以使用 -moz-user-select: text 在"),e("strong",[t._v("子元素")]),t._v("上重新启用选择。")]),t._v(" "),e("li",[t._v("auto：auto的计算值确定如下\n"),e("ul",[e("li",[t._v("在 ::before 和 ::after 伪元素上，计算属性是 none")]),t._v(" "),e("li",[t._v("如果元素是可编辑元素，则计算值是 contain")]),t._v(" "),e("li",[t._v("否则，如果此元素的父元素的 user-select 的计算值为 all, 计算值则为 all")]),t._v(" "),e("li",[t._v("否则，如果此元素的父级上的 user-select 的计算值为 none, 计算值则为 none")]),t._v(" "),e("li",[t._v("否则，计算值则为 text")])])]),t._v(" "),e("li",[t._v("text：用户可以选择文本。")]),t._v(" "),e("li",[t._v("-moz-none：元素和子元素的文本将显示为无法选择它们。 请注意， Selection 对象可以包含这些元素。 可以使用 -moz-user-select: text. 在子元素上重新启用选择。 从Firefox 21开始，none 表现得像 -moz-none.")]),t._v(" "),e("li",[t._v("all：在一个HTML编辑器中，当双击子元素或者上下文时，那么包含该子元素的最顶层元素也会被选中。")]),t._v(" "),e("li",[t._v("contain(可以是element，他是IE中的特有的别名))：允许选择在元素内开始; 但是，选择将包含在该元素的边界内。 仅在Internet Explorer中受支持。")])]),t._v(" "),e("p",[t._v('注意：在不同浏览器之间实现的一个区别是继承。 在Firefox中，-moz-user-select不会被绝对定位的元素继承，但在Safari和Chrome中，-webkit-user-select由这些元素继承。IE6-9不支持该属性，但支持使用标签属性 onselectstart="return false;" 来达到 user-select:none 的效果。')]),t._v(" "),e("p",[t._v("这个属性在不希望选中文本时非常有用，有时双击鼠标，会出现某些文字或者段落被选中的情况，如果不希望选中，就可以使用这个属性。")]),t._v(" "),e("h2",{attrs:{id:"pointer-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pointer-events"}},[t._v("#")]),t._v(" pointer-events")]),t._v(" "),e("p",[t._v("pointer-events CSS 属性指定在什么情况下 (如果有) 某个特定的"),e("strong",[t._v("图形元素")]),t._v("可以成为鼠标事件的 target。")]),t._v(" "),e("p",[t._v("注意：除了指示该元素不是鼠标事件的目标之外，值"),e("strong",[t._v("none")]),t._v("表示鼠标事件“"),e("strong",[t._v("穿透")]),t._v("”该元素并且指定该元素“下面”的任何东西。")]),t._v(" "),e("p",[t._v("语法：")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Keyword values */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  默认    */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" visiblePainted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" visibleFill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" visibleStroke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" visible"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" painted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stroke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SVG only */")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Global values */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" initial"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("ul",[e("li",[t._v("auto：与pointer-events属性未指定时的表现效果相同，对于SVG内容，该值与visiblePainted效果相同")]),t._v(" "),e("li",[t._v("none：元素永远不会成为鼠标事件的target。但是，当其后代元素的pointer-events属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。")]),t._v(" "),e("li",[t._v("visiblePainted：只适用于SVG。元素只有在以下情况才会成为鼠标事件的目标：\n"),e("ul",[e("li",[t._v("visibility属性值为visible，且鼠标指针在元素内部，且fill属性指定了none之外的值")]),t._v(" "),e("li",[t._v("visibility属性值为visible，鼠标指针在元素边界上，且stroke属性指定了none之外的值")])])]),t._v(" "),e("li",[t._v("visibleFill:只适用于SVG。只有在元素visibility属性值为visible，且鼠标指针在元素内部时,元素才会成为鼠标事件的目标，fill属性的值不影响事件处理。")]),t._v(" "),e("li",[t._v("visibleStroke：只适用于SVG。只有在元素visibility属性值为visible，且鼠标指针在元素边界时,元素才会成为鼠标事件的目标，stroke属性的值不影响事件处理。")]),t._v(" "),e("li",[t._v("visible：只适用于SVG。只有在元素visibility属性值为visible，且鼠标指针在元素内部或边界时,元素才会成为鼠标事件的目标，fill和stroke属性的值不影响事件处理。")]),t._v(" "),e("li",[t._v("painted：只适用于SVG。元素只有在以下情况才会成为鼠标事件的目标：\n"),e("ul",[e("li",[t._v("鼠标指针在元素内部，且fill属性指定了none之外的值")]),t._v(" "),e("li",[t._v("鼠标指针在元素边界上，且stroke属性指定了none之外的值\nvisibility属性的值不影响事件处理。\nfill：只适用于SVG。只有鼠标指针在元素内部时,元素才会成为鼠标事件的目标，fill和visibility属性的值不影响事件处理。\nstroke：只适用于SVG。只有鼠标指针在元素边界上时,元素才会成为鼠标事件的目标，stroke和visibility属性的值不影响事件处理。\nall：只适用于SVG。只有鼠标指针在元素内部或边界时,元素才会成为鼠标事件的目标，fill、stroke和visibility属性的值不影响事件处理。")])])])]),t._v(" "),e("p",[t._v("注意：使用pointer-events来阻止元素成为鼠标事件目标不一定意味着元素上的事件侦听器永远不会触发。如果元素后代明确指定了pointer-events属性并允许其成为鼠标事件的目标，那么指向该元素的任何事件在事件传播过程中都将通过父元素，并以适当的方式触发其上的事件侦听器。当然，位于父元素但不在后代元素上的鼠标活动都不会被父元素和后代元素捕获")]),t._v(" "),e("p",[t._v("这个属性在做水印时十分有效，给页面整体盖上一个有透明度的水印，同时不影响下面元素的点击。")])])}),[],!1,null,null,null);s.default=a.exports}}]);