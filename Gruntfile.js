module.exports = function(grunt){
	//initiate grunt tasks and files.
	grunt.initConfig({
	  files: ".js",
      compile: "Compiled:, <%= files %>",

      watch: {
      	files: ['app/js/main.js', 'app/css/main.css', 'index.html'],
      	tasks: ['uglify', 'Congratulate'],
      	
      },

      uglify: {
      	 dist:{
      	 	files: {
      	 		"dist/app.min.js":"app/**/*.js"
      	 	}
      	 }
      },
	  bower_concat: {
		  all: {
		    dest: 'build/_bower.js',
		    cssDest: 'build/_bower.css',
		    exclude: [
		      'modernizr'
		    ],
		    dependencies: {
		      'underscore': 'jquery',
		      'backbone': 'underscore',
		      'jquery-mousewheel': 'jquery'
		    },
		    bowerOptions: {
		      relative: false
		    }
		}
	  }
	});
   
    //load plugin that provides it's task.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-bower-concat");
    require('load-grunt-tasks')(grunt);
    
    //grunt-watch this declared task.
	grunt.registerTask("Congratulate", function(){
		grunt.log.writeln("Keep Moving Up Bobby!!!");
	});

	//default task(s).
	grunt.registerTask("default", function(){
		grunt.log.writeln(grunt.config.get("compile"));
	});
}


