var http=require('http');
var async=require('async');

var reqbody='';
var count=0;

async.whilst(
	function(){
		return !/meerkat/.test(reqbody);
	},
	function(done){
		var body='';
		http.get(process.argv[2],function(res){
			res.on('data',function(chunk){
				body+=chunk;
			})
			res.on('end',function(){
				reqbody=body;
				count++;
				done();
			})
		}).on('error',function(err){
			done(err);
		});
	},
	function(err){
		if(err){
			return console.error(err)
		}
		console.log(count);
	}
)