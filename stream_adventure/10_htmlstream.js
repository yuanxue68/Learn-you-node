var trumpet=require('trumpet');
var through=require('through2');

tr=trumpet();
process.stdin.pipe(tr).pipe(process.stdout);
stream=tr.select('.loud').createStream();
stream
	.pipe(through(function(buf,encode,next){
			this.push(buf.toString().toUpperCase());
			next();
		}))
	.pipe(stream)
	

