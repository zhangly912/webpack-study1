学习使用babel,使用presets来转换es6。

#####1.js文件处理的loader 【babel-loader】 官网：http://babeljs.io/docs/setup/#installation
安装：npm install --save-dev babel-loader babel-core
#####2.loader指定参数的方式两种：一种低query,一种是loader后面加上？指定参数
#####3.presets的指定。三种方式：（1）.配置文件中作为query里面指定。（2）.通过在根目录下面简历.babelc的文件里面写上{presets:['latest']}。（3）.通过package.json里面加入"babel":{
	"presets":["latest"]
};
#####4.babel-loader的转换速度很慢，如何进行改善。exclude指定不处理的范围
#####5.module.loaders包含哪些参数：loaders,loader,xeclude,include,test。