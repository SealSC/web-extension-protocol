module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      protocol: {
        files: {
          'dist/sealsc-web-extension-protocol.js': [ 'src/protocol.js' ]
        },

        options: {
          transform: [["babelify"]],
          browserifyOptions: {
            standalone: 'sealsc-web-extension-protocol'
          }
        }
      },
    },
    uglify: {
      options: {
        sourceMap: true
      },
      protocol: {
        files:{
          'dist/sealsc-web-extension-protocol.min.js': [ 'dist/sealsc-web-extension-protocol.js' ],
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['browserify', 'uglify']);
};
