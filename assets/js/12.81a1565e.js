(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{61:function(e,v,_){"use strict";_.r(v);var o=_(0),l=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("blockquote",[_("p",[e._v("如果我们仅仅需要一个代码的运行环境,比如我需要搭建"),_("code",[e._v("go")]),e._v("的运行环境,而不想把代码拷贝进去,那么就会遇到这个问题。因为容器是一个进程,而且需要这个进程在前台运行,阻塞住"),_("code",[e._v("shell")]),e._v(",否则启动以后,docker主线程就会直接退出。但是现在我们没有用业务代码"),_("code",[e._v("go run x.go")]),e._v("来阻塞住"),_("code",[e._v("shell")]),e._v(",那怎么办呢?")])]),e._v(" "),_("h2",{attrs:{id:"一、业务场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、业务场景"}},[e._v("#")]),e._v(" 一、业务场景")]),e._v(" "),_("blockquote",[_("p",[e._v("如果我们仅仅需要一个代码的运行环境,比如我需要搭建"),_("code",[e._v("go")]),e._v("的运行环境,而不想把代码拷贝进去,那么就会遇到这个问题。因为容器是一个进程,而且需要这个进程在前台运行,阻塞住"),_("code",[e._v("shell")]),e._v(",否则启动以后,"),_("code",[e._v("docker")]),e._v("主线程就会直接退出。但是现在我们没有用业务代码"),_("code",[e._v("go run x.go")]),e._v("来阻塞住"),_("code",[e._v("shell")]),e._v(",那怎么办呢?")])]),e._v(" "),_("h2",{attrs:{id:"二、优雅的阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、优雅的阻塞"}},[e._v("#")]),e._v(" 二、优雅的阻塞")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("方法一:"),_("code",[e._v('CMD["tail","-f","/dev/null"]')]),e._v(",使用"),_("code",[e._v("linux")]),e._v("系统的"),_("code",[e._v("tail")]),e._v("命令,可以阻塞住"),_("code",[e._v("shell")]),e._v(",容器不会退出。")])]),e._v(" "),_("li",[_("p",[e._v("方法二:如果安装的工具中有能够阻塞shell的命令,可以直接它的命令,比如我在容器中安装了"),_("code",[e._v("ssh")]),e._v("便于我外部xshell连接到容器,那么就可以使用:"),_("code",[e._v('CMD["/usr/sbin/sshd","-D"]')])])]),e._v(" "),_("li",[_("p",[e._v("方法三:使用docker的"),_("code",[e._v("-dti")]),e._v("参数,主线程会阻塞住"),_("code",[e._v("shell")]),e._v(", 比如"),_("code",[e._v("docker run -dti --name example image")]),e._v(",docker会后台运行,并且不会退出,但不适用"),_("code",[e._v("docker-compose")]),e._v("。")])])]),e._v(" "),_("h2",{attrs:{id:"三、业务代码需要注意的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、业务代码需要注意的问题"}},[e._v("#")]),e._v(" 三、业务代码需要注意的问题")]),e._v(" "),_("ul",[_("li",[e._v("业务代码不能以守护模式运行,比如我用php写了一个多进程的服务,支持守护模式运行"),_("code",[e._v('CMD["php" ,"index.php","start", "-d"]')]),e._v(",那么在容器里面,会导致容器退出,无法阻塞住"),_("code",[e._v("shell")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);