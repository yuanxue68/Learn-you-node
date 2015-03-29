var http=require('http');
var async=require('async');

async.map([process.argv[2],process.argv[3]],function(url,done){
	var body='';
	http.get(url,function(res){
		res.on('data',function(chunk){
			body+=chunk;
		})
		res.on('end',function(){
			done(null,body);
		})
	}).on('error',function(err){
			done(err);
	})
},
function(err,result){
	if(err)
		console.log(err);
	console.log(result);
});