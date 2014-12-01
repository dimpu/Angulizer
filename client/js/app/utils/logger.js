
// custom logger for app


(function ( define ) {
    "use strict";

	defint([],function(){

		var get_date=function(){
			return new Date();
		};

		return {
			debug:function(log_string){
				console.log(get_date +" - " +log_string);
			},
		};

	});


}( define ));