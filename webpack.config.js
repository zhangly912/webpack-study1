var htmlWebpackPlugin = require('html-webpack-plugin');
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
				exclude:'./node_modules/',//不处理的文件目录 省时间
				include: './src/', //指定处理打包的目录
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