module.exports = function(grunt){
	//initiate grunt tasks and files.
	grunt.initConfig({
	  files: ".js",
      compile: "Compiled:, <%= files %>",

      watch: {
      	files: ["journal.txt",".js"],
      	tasks: ["Congratulate"],
      	
      },

      uglify: {
      	 dist:{
      	 	files: {
      	 		"dist/app.min.js":"app/**/*.js"
      	 	}
      	 }
      }
	});
    
    //load plugin that provides it's task.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
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


