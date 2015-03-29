var through=require('through2')
var split=require('split');
var even=false;

transform=through(write,end);
process.stdin
	.pipe(split())
	.pipe(transform)
	.pipe(process.stdout);

function write(buffer,encoding,next){
	if(even)
		buffer=buffer.toString().toUpperCase();
	else
		buffer=buffer.toString().toLowerCase();
	even=!even;
	this.push(buffer+'\n');
	next();
}

function end(){
	this.push(null);
}