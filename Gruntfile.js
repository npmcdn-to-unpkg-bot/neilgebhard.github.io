module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'bundle.min.js': 'bundle.js'
                }
            }
        },
        watch: {
            options: { livereload: true },
            files: ['index.html', 'Gruntfile.js', 'main.js'],
            tasks: ['jshint', 'browserify', 'uglify']
        },
        jshint: {
            files: ['Gruntfile.js', 'main.js']
        },
        browserify: {
            dist: {
                files: {
                    'js/bundle.js': ['main.js']
                }
            }
        },
        express: {
            all: {
                options: {
                    port: 5000,
                    hostname: 'localhost',
                    bases: ['./'],
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('server', ['express', 'watch']);
    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
};