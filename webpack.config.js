//就不需要命令行通过参数来执行这些操作

var htmlWebpackPlugin = require('html-webpack-plugin');//对于插件的引用 commondJS写法

//commondJS的模块化输出
module.exports = {
	// entry: './src/script/main.js',//打包的入口、、单个入口，单个输出
	// entry: ['./src/script/main.js','./src/script/a.js'],//多个打包的入口，合并输出

	//多模块，输出多模块 输出的模块就不能写死，避免覆盖  所以需要用占位符来命名，现在提供了三种
	//name  hash chunkhash   name是entry中的key,hash是执行打包命令时的值，chunkhash是入口每个模块所属的hash.
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},

	output: {
		path: './dist',//放置的目录
		filename: 'js/[name]-[chunkhash].js' // 输出的文件名
	},

	//plugin的使用 在这里进行使用的插件的初始化 可以给插件传参数
	plugins: [
		new htmlWebpackPlugin({
			// filename:'index-[hash].html',。//html文件命名
			template:'index.html', //根目录
			inject:'body'//文件放置的位置  head/body里面
		})
	]
}