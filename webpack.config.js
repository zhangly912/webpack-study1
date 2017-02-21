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
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js',
	},

	output: {
		path: './dist',//放置的目录
		filename: 'js/[name]-[chunkhash].js', // 输出的文件名
		publicPath:'http://cdn.com'
	},

	//plugin的使用 在这里进行使用的插件的初始化 可以给插件传参数
	plugins: [
		new htmlWebpackPlugin({
			filename:'index.html',//html文件命名
			template:'index.html', //根目录
			inject:false,//文件放置的位置  head/body里面  false不放置打包后的文件 可以通过自己遍历放入到指定位置，因为css需要放头部，js需要放body里面
			title:'This is index.html',
			excludeChunks:['b','c','a']
			// minify: {//压缩生成的html 具体看官网插件 删除注释，空格https://www.npmjs.com/package/html-webpack-plugin
			// 	removeComments: true,
			// 	collapseWhitespace: true,
			// }
		}),
		new htmlWebpackPlugin({
			filename:'a.html',//html文件命名
			template:'index.html', //根目录
			inject:false,//文件放置的位置  head/body里面  false不放置打包后的文件 可以通过自己遍历放入到指定位置，因为css需要放头部，js需要放body里面
			title:'This is a.html',
			excludeChunks:['b','c']
			// minify: {//压缩生成的html 具体看官网插件 删除注释，空格https://www.npmjs.com/package/html-webpack-plugin
			// 	removeComments: true,
			// 	collapseWhitespace: true,
			// }
		}),
			new htmlWebpackPlugin({
			filename:'b.html',//html文件命名
			template:'index.html', //根目录
			inject:false,//文件放置的位置  head/body里面  false不放置打包后的文件 可以通过自己遍历放入到指定位置，因为css需要放头部，js需要放body里面
			title:'This is b.html',
			excludeChunks:['a','c']
			// minify: {//压缩生成的html 具体看官网插件 删除注释，空格https://www.npmjs.com/package/html-webpack-plugin
			// 	removeComments: true,
			// 	collapseWhitespace: true,
			// }
		}),
			new htmlWebpackPlugin({
			filename:'c.html',//html文件命名
			template:'index.html', //根目录
			inject:false,//文件放置的位置  head/body里面  false不放置打包后的文件 可以通过自己遍历放入到指定位置，因为css需要放头部，js需要放body里面
			title:'This is b.html',
			excludeChunks:['a','b']
			// minify: {//压缩生成的html 具体看官网插件 删除注释，空格https://www.npmjs.com/package/html-webpack-plugin
			// 	removeComments: true,
			// 	collapseWhitespace: true,
			// }
		})
	]
}