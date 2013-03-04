module.exports = function(grunt) {
    var config = grunt.file.readJSON('config.json');
    grunt.initConfig(config);

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['jshint', 'build', 'rsync']);
};