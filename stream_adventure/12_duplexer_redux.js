var duplexer=require('duplexer2');
var through=require('through2').obj;

module.exports=function(counter){
	var count={};
	stream=through(write,end);
	return duplexer(stream,counter);

	function write(buf,encode,next){
		if(count[buf.country])
			count[buf.country]+=1;
		else
			count[buf.country]=1;
		next();
	}

	function end(done){
		counter.setCounts(count);
		done();
	}
}

