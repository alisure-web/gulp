var gulp = require('gulp');
//- 多个文件合并为一个；
var concat = require('gulp-concat');
//- 压缩CSS为一行；
var minifyCss = require('gulp-minify-css');
//- 压缩js为一行；
var uglify = require('gulp-uglify');
//- 对文件名加MD5后缀
var rev = require('gulp-rev');
//- 路径替换
var revCollector = require('gulp-rev-collector');
//- 删除dist中的文件
var del = require("del");

//- 创建一个名为 concat 的 task     
gulp.task('concat', function() {
    //- 需要处理的css文件，放到一个字符串数组里
    gulp.src(['./src/css/*.css'])
        //.pipe(concat('wrap.min.css')) //- 合并后的文件名
        .pipe(minifyCss())//- 压缩处理成一行
        .pipe(rev())//- 文件名加MD5后缀
        .pipe(gulp.dest('./dist/css'))//- 输出文件本地
        .pipe(rev.manifest('rev-manifest-css.json'))//- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev'));//- 将 rev-manifest.json 保存到 rev 目录内

    gulp.src(['./src/js/*.js'])
        .pipe(uglify())//- 压缩处理成一行
        .pipe(rev())//- 文件名加MD5后缀
        .pipe(gulp.dest('./dist/js'))//- 输出文件本地
        .pipe(rev.manifest('rev-manifest-js.json'))//- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev'));//- 将 rev-manifest.json 保存到 rev 目录内
});

gulp.task('rev', function() {
    //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
    gulp.src(['./rev/*.json', './src/*.html'])
    //- 执行文件内css名的替换
        .pipe(revCollector())
        //- 替换后的文件输出的目录
        .pipe(gulp.dest('./dist/html'));
});

gulp.task('del',function (callback) {
    del(['./dist/css','./dist/js','./dist/html'],callback);
});

/*默认任务*/
gulp.task('default', ['del', 'concat', 'rev'],function () {
    
});