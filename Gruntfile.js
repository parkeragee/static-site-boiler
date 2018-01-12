module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    post: 8000,
                    hostname: '*'
                }
            }
        },
        watch: {
            html: {
                files: ['./index.html'],
                tasks: ['htmlmin']
            },
            sass: {
                files: ['assets/styles/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['*.html', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/styles.css': 'assets/styles/styles.scss'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: {
                    'dist/index.html': './index.html'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                src: 'assets/**/*',
                dest: 'dist/'
            }
        }
    });
    grunt.registerTask('default', ['connect', 'sass:dist', 'htmlmin', 'watch']);
    grunt.registerTask('build', ['sass:dist', 'htmlmin', 'copy']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
};