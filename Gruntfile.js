module.exports = function (grunt) {

    grunt.initConfig({
        copydeps: {
            target: {
                options: {
                    minified: true,
                    unminified: true,
                    css: true,
                    js: true
                },
                pkg: 'package.json',
                dest: 'www/node_modules'
            }
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'src/',
                        src: '**',
                        dest: 'www/'
                    },
					{
                        expand: true,
                        cwd: 'node_modules/',
                        src: [
                            'angular/**/*.js',
							'angular-route/**/*.js',
							'bootstrap-css-only/**/*.css',
							'angular-ui-bootstrap/dist/**/*.*',
							'angular-i18n/**/*.js',
							'material-icons/**/*.js'
                        ],
                        dest: 'www/node_modules',
                        flatten: true
                    }
                ],
            },
        },
        connect: {
            server: {
                options: {
                    base: 'www',
                    port: 8100,
                    hostname: '*',
                    onCreateServer: function (server, connect, options) {
                        var io = require('socket.io').listen(server);
                        io.sockets.on('connection', function (socket) {
                            // do something with socket
                        });
                    }
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.*'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-copy-deps');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

	//grunt.registerTask('default', ['copy', 'connect', 'watch']);
    grunt.registerTask('default', ['copydeps', 'copy', 'connect', 'watch']);
};
