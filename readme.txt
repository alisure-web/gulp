Gulp 自动化构建工具
入门步骤：

1.安装Node
下载Node安装即可
验证：
	node -v
	npm -v


2.安装cnpm
npm install -g cnpm -registry=https://registry.npm.taobao.org
验证：
	cnpm -v


3.安装gulp
cnpm install -g gulp
验证：
	gulp -v


4.定位到项目
dir cd Tab


5.新建package.json
cnpm init
(自动创建，依次输入相应信息即可)
验证：
	查看目录下的文件


6.更新package.json文件
cnpm install --save-dev gulp
(更新devDependencies的值)
验证：
	查看目录下的文件


7.添加任务依赖
cnpm install gulp-concat gulp-rename gulp-uglify --save-dev
(以合并、重命名和压缩为例)


8.新建gulpfile.js文件
该文件在package.json中的main中定义
具体编写方法参见：http://www.gulpjs.com.cn


9.运行：执行任务
gulp
gulp 任务名


10.WebStorm运行
在gulpfile.js上右键“Show Gulp Tasks”
双击任务运行即可