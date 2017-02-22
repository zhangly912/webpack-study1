var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');//借助node中的path  实现设置绝对路径
//eg: path.resolve(__dirname,'app/src')； 借助resolve方法实现传入当前上下午环境的路径+相对路径==解析出绝对路径。

module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: 'js/bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				// exclude:'./node_modules/',//不处理的文件目录 省时间 相对路径
				exclude: path.resolve(__dirname,'node_modules'), //绝对路径
				// include: './src/', //指定处理打包的目录
				include: path.resolve(__dirname,'src'), //绝对路径
				query: {
					presets: ['latest']
				}
				
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			title:'webpack loader'
		})
	]
}