(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{409:function(t,n,s){"use strict";s.r(n);var a=s(42),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"颜色混合模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#颜色混合模式"}},[t._v("#")]),t._v(" 颜色混合模式")]),t._v(" "),s("blockquote",[s("p",[t._v("参考自"),s("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/16",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈一些有趣的CSS题目（28）-- 不可思议的颜色混合模式 mix-blend-mode"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。")]),t._v(" "),s("h2",{attrs:{id:"mix-blend-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mix-blend-mode"}},[t._v("#")]),t._v(" mix-blend-mode")]),t._v(" "),s("p",[t._v("mix-blend-mode 其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。该CSS属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。")]),t._v(" "),s("p",[t._v("可取值：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           // 正常\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multiply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         // 正片叠底\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           // 滤色\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" overlay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          // 叠加\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" darken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           // 变暗\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lighten"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          // 变亮\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color-dodge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      // 颜色减淡\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color-burn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       // 颜色加深\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hard-light"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       // 强光\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" soft-light"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       // 柔光\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" difference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       // 差值\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" exclusion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        // 排除\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              // 色相\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" saturation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       // 饱和度\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            // 颜色\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" luminosity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       // 亮度\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" initial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("mix-blend-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("除去 initial 默认、inherit 继承 和 unset 还原这 3 个所有 CSS 属性都可以取的值外，还有另外的 16 个具体的取值，对应不同的混合效果。\n具体效果可以查看"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/blend-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN混合模式"),s("OutboundLink")],1),t._v("\n除此之外看看如何比较好的理解或者说记忆这些效果，摘自"),s("a",{attrs:{href:"https://www.zcool.com.cn/article/ZMzcyNzY=.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Photoshop中高级进阶系列之一——图层混合模式原理"),s("OutboundLink")],1),t._v("：\n"),s("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/8554143/25795589/9c58a612-3408-11e7-8b91-eb08c831be8b.png",alt:"image"}}),t._v("\n当然，上图是 PS 中的混合模式，数量比 CSS 中的多出几个，但是分类还是通用的。")]),t._v(" "),s("p",[t._v("具体应用也可以看这里"),s("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/16",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈一些有趣的CSS题目（28）-- 不可思议的颜色混合模式 mix-blend-mode"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"background-blend-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-blend-mode"}},[t._v("#")]),t._v(" background-blend-mode")]),t._v(" "),s("p",[t._v("background-blend-mode CSS属性定义该元素的背景图片，以及背景色如何混合。")]),t._v(" "),s("ul",[s("li",[t._v("可以是背景图片与背景图片的混合，")]),t._v(" "),s("li",[t._v("也可以是背景图片和背景色的之间的混合。")])]),t._v(" "),s("p",[t._v("混合模式应该按background-image CSS属性同样的顺序定义。如果混合模式数量与背景图像的数量不相等，它会被截取至相等的数量。")]),t._v(" "),s("p",[t._v("background-blend-mode 的可用取值与 mix-blend-mode一样，不重复介绍，具体应用可以看"),s("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/31",target:"_blank",rel:"noopener noreferrer"}},[t._v("不可思议的混合模式 background-blend-mode"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);