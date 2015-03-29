var express=require('express');
var fs=require('fs');

app=express();

app.get('/books',function(req,res){
	fs.readFile(process.argv[3],function callback(err,data){
		if(err)
			throw err
		result=JSON.parse(data);
		res.json(result);
	})
})

app.listen(process.argv[2]);