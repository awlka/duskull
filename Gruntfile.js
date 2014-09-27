/**
 * Duskull Gruntfile!
 */
'use strict';

module.exports = function (grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Uglify!
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/**/*.js',
        dest: 'build/js/main.'
      }
    }

  });

};