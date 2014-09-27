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
        dest: 'build/js/a.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/_scss/main.scss': 'build/css/a.css'
        }
      }
    },

    watch: {
      uglify: {
        files: ['assets/js/**/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['assets/_scss/**/*.{scss,sass}'],
        tasks: ['sass']
      }
    }

  });

  grunt.registerTask('uglify', ['uglify']);
  grunt.registerTask('sass', ['sass']);

  grunt.registerTask('default', ['watch']);

};