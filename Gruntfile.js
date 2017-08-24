//包装函数
module.exports = function(grunt) {
    //所有配置信息
    grunt.initConfig({
        //package信息
        pkg: grunt.file.readJSON('package.json'),
        //uglify配置
        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>  v-<%=pkg.version%>  <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                maxLineLen: 500
            },
            buildjs: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: 'mine.js',
                    dest: 'dest/js',
                 ext: '.min.js'
                }]
            }
        },
        //js检测
        jshint: {
          build: ['Gruntfile.js','js/*.js'],
          options: {
              jshintrc: '.jshintrc'
          }
        },
        //合并
        concat: {
            options: {
                banner: '/*! <%=pkg.name%>  v-<%=pkg.version%>  <%= grunt.template.date("yyyy-mm-dd") %> */\n',
            },
//          bar: {
//              src: ['output/js/*.js'],
//              dest: 'output/all/commonjs.min.js',
//          },
            css: {
                src: ['css/mybase.css','css/style.css'],
                dest: 'css/commonstyle.css'
            }
            
        },

        //css压缩
        cssmin: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>  v-<%=pkg.version%>  <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['commonstyle.css'],
                    dest: 'dest/css/',
                    ext: '.min.css'
                }]
            }
        },
        //watch 监控
        watch: {
            build: {
                files: ['Gruntfile.js','input/js/*.js','input/css/*.css'],
                tasks: ['jshint','uglify','cssmin'],
                options: {
                    spawn: false
                }
            }
        }

    });
    //加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //注册事件
    grunt.registerTask('default', ['uglify','concat','cssmin','watch']);
};
