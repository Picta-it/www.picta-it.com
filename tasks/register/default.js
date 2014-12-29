module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets', 'copy:dev', 'linkAssets',  'watch']);
};
