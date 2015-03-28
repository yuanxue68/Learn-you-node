var through=require('through2');

var stream=through(write,end);
process.stdin.pipe(stream).pipe(process.stdout);

function write(buffer,encoding,next){
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(){
	this.push(null);
}