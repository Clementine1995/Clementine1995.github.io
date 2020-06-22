(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(n,s,e){"use strict";e.r(s);var a=e(42),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx的快速搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx的快速搭建"}},[n._v("#")]),n._v(" Nginx的快速搭建")]),n._v(" "),e("h2",{attrs:{id:"基于yum的方式安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于yum的方式安装nginx"}},[n._v("#")]),n._v(" 基于Yum的方式安装Nginx")]),n._v(" "),e("p",[n._v("我们可以先来查看一下yum是否已经存在，命令如下："),e("code",[n._v("yum list | grep nginx")])]),n._v(" "),e("p",[n._v("如果不存在，或者不是你需要的版本，那我们可以自行配置yum源，下面是官网提供的源，我们可以放心大胆的使用。")]),n._v(" "),e("div",{staticClass:"language-() line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/\ngpgcheck=0\nenabled=1\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[n._v("复制上面的代码，然后在终端里输入："),e("code",[n._v("vim /etc/yum.repos.d/nginx.repo")])]),n._v(" "),e("p",[n._v("赋值完成后，你需要修改一下对应的操作系统和版本号，因为我的是centos和7的版本，所以改为这样。")]),n._v(" "),e("div",{staticClass:"language-() line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("baseurl=http://nginx.org/packages/centos/7/$basearch/\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("如果都已经准备好了，那就可以开始安装了，安装的命令非常简单："),e("code",[n._v("yum install nginx")]),n._v("\n安装完成后可以使用命令"),e("code",[n._v("nginx -v")]),n._v("，来检测Nginx的版本。")])])}),[],!1,null,null,null);s.default=t.exports}}]);