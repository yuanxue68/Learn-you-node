var http=require('http');
var through=require('through2');
var server=http.createServer(function(req,res){
	if (req.method==="POST"){
		req.pipe(through(function(data,encode,next){
			this.push(data.toString().toUpperCase());
			next();
		})).pipe(res);
	}
})

server.listen(process.argv[2]);