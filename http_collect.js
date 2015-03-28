var http=require('http');
url=process.argv[2];
var result='';
http.get(url,function(response){
	response.on('data',function(data){
		result=result+data.toString();
	});
	response.on('end',function(data){
		console.log(result.length);
		console.log(result.toString());
	})
})