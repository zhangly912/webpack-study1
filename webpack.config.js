//就不需要命令行通过参数来执行这些操作

//commondJS的模块化输出
module.exports = {
	entry: './src/script/main.js',//打包的入口
	output: {
		path: './dist/js',//放置的目录
		filename: 'bundle.js' // 输出的文件名
	}
}