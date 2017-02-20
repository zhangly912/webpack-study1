// require('./world.js');
// require('style-loader!css-loader!./style.css');
//使webpack处理css模块，必须使用css-loader 
//而使样式正确引用到页面dom上面，必须使用style-loader将css-loader处理完
//之后的css插入到页面head中。

require('./world.js');
require('./style.css');
//如果希望只是这样写，那么需要使用webpack命令行参数来实现指定模块加载 
//这里需要module-bind 这个参数
//--watch 实现改变的时候自动打包
//--progress 看到打包过程的参数
//-display-modules 查看打包的模块，通过什么loader来处理也会写出了
//-display-reasons 为什么要打包告诉你
function hello (str){
  console.log(str);  
  
}

hello('hello world');