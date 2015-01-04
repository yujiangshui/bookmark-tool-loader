module.exports = function(grunt) {


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				files:{
					'bookmark-tool-loader.min.js': ['bookmark-tool-loader.js']
				}
			}
		},
		jshint: {
			files: ['bookmark-tool-loader.js']
		},
		watch: {
			scripts: {
				files: ['bookmark-tool-loader.js'],
				tasks: ['jshint', 'uglify:build']
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'uglify:build', 'watch']);

};