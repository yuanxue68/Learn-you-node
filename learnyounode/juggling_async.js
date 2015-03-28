var http=require('http');
var tracker=0;
result1='';
result2='';
result3='';

http.get(process.argv[2],function(response){
	response.on('data',function(data){
		result1=result1+data.toString();
	});
	response.on('end',function(){
		console.log(result1);
		http.get(process.argv[3],function(response){
			response.on('data',function(data){
				result2=result2+data.toString();
			});
			response.on('end',function(){
				console.log(result2);
				http.get(process.argv[4],function(response){
					response.on('data',function(data){
						result3=result3+data.toString();
					});
					response.on('end',function(){
						console.log(result3);
					})
				})
			})
		})
	})
})




