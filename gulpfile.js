const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const ghPages = require('gulp-gh-pages');
const dist = "./dist";

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task("html",()=> {
    return gulp.src("src/*.pug")
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(dist))
        .pipe(browsersync.stream());

});
gulp.task("html-modules",()=> {
    return gulp.src("src/modules/*.pug")
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(dist+"/modules"))
        .pipe(browsersync.stream());

});

gulp.task("build-js", () => {
    return gulp.src("./src/js/index.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'scripts.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(dist + '/js'))
        .pipe(browsersync.stream());
});


gulp.task("build-sass", () => {
    return gulp.src("./src/css/*.scss")
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(gulp.dest(dist + '/css'))
        .pipe(browsersync.stream());
});


gulp.task("copy-img", () => {
    gulp.src("./src/img/icons/**/*.*")
        .pipe(gulp.dest(dist + "/img/icons"));

    return gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest(dist + "/img"))
        .pipe(browsersync.stream());
});

gulp.task("watch", () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    });

    gulp.watch("./src/*.pug", gulp.parallel("html"));
    gulp.watch("./src/modules/*.pug", gulp.parallel("html"));
    gulp.watch("./src/img/icons/**/*.*", gulp.parallel("copy-img"));
    gulp.watch("./src/img/**/*.*", gulp.parallel("copy-img"));
    gulp.watch("./src/css/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("html", "html-modules", "copy-img", "build-sass", "build-js"));

gulp.task("prod", () => {
    gulp.src("./src/index.pug")
        .pipe(gulp.dest(dist));
    gulp.src("./src/modules/*.pug")
        .pipe(gulp.dest(dist + "/modules"));
    gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest(dist + "/img"));
    gulp.src("./src/img/icons/**/*.*")
        .pipe(gulp.dest(dist + "/img/icons"));

    gulp.src("./src/js/index.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'scripts.js'
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: false,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(dist + '/js'));

    return gulp.src("./src/css/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist + '/css'));
});

gulp.task("default", gulp.parallel("watch", "build"));