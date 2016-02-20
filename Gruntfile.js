module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/script.js'
            }
        },
        uglify: {
            options: {
                banner: '/* Updated on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/script.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        watch: {
            options: { livereload: true },
            files: ['index.html', 'Gruntfile.js', 'src/**/*.js'],
            tasks: []
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js']
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

    grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('server', ['jshint', 'express', 'watch']);
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
