# webpack-study1
####// require('./world.js');
####// require('style-loader!css-loader!./style.css');
####//使webpack处理css模块，必须使用css-loader 
####//而使样式正确引用到页面dom上面，必须使用style-loader将css-loader处理完
####//之后的css插入到页面head中。

####require('./world.js');
####require('./style.css');
####//如果希望只是这样写，那么需要使用webpack命令行【参数】来实现指定模块加载 
####//这里需要module-bind 这个参数
####【--watch】 实现改变的时候自动打包
####【--progress】 看到打包过程的参数
####【-display-modules】 查看打包的模块，通过什么loader来处理也会写出了
####【-display-reasons】 为什么要打包告诉你
####【--config】  webpack --config webpack.dev.config.js 修改配置文件名称之后的运行方式


1.入口【entry】：字符串，数组，对象三种情况。 
1.1字符串，单个输入，单个输出,输出文件名称可以写死，也可以用动态的。
1.2数组是为了解决两个平行的不互相依赖的文件打包在一起，输出文件命名与上面一致。
对象：分成不同的chunk，输出文件命名不能写死，否则会相互覆盖，具体看配置文件。

2.那么如何在html中引入动态生成的文件呢？需要使用webpack的插件 【html-webpack-plugin]
3.实现多页面应用。
4.静态资源直接append到页面之中的实现 compilation.assets[资源路径].source();
5.html-webpack-plugin :https://www.npmjs.com/package/html-webpack-plugin 
chunks,excludeChunks的使用。

1.npm install
安装依赖

2.npm start 自定义npm脚本 -->package.json里面配置
启动项目
