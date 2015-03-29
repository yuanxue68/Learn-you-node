var combine=require('stream-combiner');
var through=require('through2');
var split=require('split');
var zlib=require('zlib');

module.exports=function(){
	var stream=through(write,end);
	var bookGenres;

	function write(buf,encode,next){
		if(buf.length===0)
			return;
		process.stdout.write(buf.toString()+"\n");
		buf=JSON.parse(buf);
		if(buf.type==="genre"){
			if(bookGenres){
				this.push(JSON.stringify(bookGenres)+"\n");
				process.stdout.write(JSON.stringify(bookGenres)+'\n');
			}

			bookGenres={
				name:buf.name,
				books:[]
			}

		}
		else{
			bookGenres.books.push(buf.name);
		}
		next();
	};
	function end(){
		this.push(JSON.stringify(bookGenres)+"\n");
		this.push(null);
	}
	return combine(split(),stream,zlib.createGzip());
}