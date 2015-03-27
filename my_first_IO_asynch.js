var fs=require('fs');

function numOfNewLine(){
	fs.readFile(process.argv[2],function countLines(err,fileContent){
		var str=fileContent.toString();
		console.log(str.split('\n').length-1);
	})
}

numOfNewLine();