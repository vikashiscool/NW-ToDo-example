module.exports = function (grunt) {
   'use strict';
   // Project configuration
   grunt.initConfig({
       jade: {
           dist: {
               options: {
                   pretty: true
               },
               files: {
                   'home.html': ['home.jade']
               }
           }
       },
       watch: {
           gruntfile: {
               files: '<%= jshint.gruntfile.src %>',
               tasks: ['jshint:gruntfile']
           },
           lib_test: {
               files: '<%= jshint.lib_test.src %>',
               tasks: ['jshint:lib_test', 'qunit']
           }
       }
   });

   // These plugins provide necessary tasks
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-jade');

   // Default task
   grunt.registerTask('default', []);
};