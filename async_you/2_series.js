var async=require('async');
var http=require('http');

async.series({
	requestOne: function(done){
		var result=''
		http.get(process.argv[2],function(res){
			res.on('data',function(chunk){
				result+=chunk;
			});
			res.on('end',function(){
				done(null,result);
			})
		})
	},
	requestTwo: function(done){
		var result='';
		http.get(process.argv[3],function(res){
			res.on('data',function(chunk){
				result+=chunk;
			});
			res.on('end',function(){
				done(null,result);
			})
		})

	}},
	function(err,results){
		console.log(results);
	}
)