var http=require('http');
var async=require('async');
var fs=require('fs');

async.waterfall([
	function(cb){
		fs.readFile(process.argv[2],function(err,data){
			if(err)
				cb(err);
			cb(null,data.toString());
		})
	},
	function(url,cb){
		var body="";
		http.get(url,function(res){
			res.on('data',function(chunk){
				body+=chunk;
			});
			res.on('end',function(){
				cb(null,body);
			});
			res.on('error',function(){
				cb(err);
			})
		})
	}],
	function(err,data){
		if(err){
			return console.log(err);
		}
		console.log(data);
	}
)