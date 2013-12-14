module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        stylus: {
            compile: {
                files: {
                    './assets/style/style.css': './assets/style/stylus/style.stylus'
                }
            }
        },

        connect: {
            server: {
                options: {
                    // hostname: '*'
                }
            }
        },

        watch: {
            stylus: {
                files: ['./assets/style/stylus/*.stylus', './assets/**.*'],
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['connect', 'stylus']);
};