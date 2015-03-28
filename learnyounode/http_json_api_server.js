var http=require('http');
var url=require('url');

var server=http.createServer(function callback(req,res){
	if(req.method=="GET"){
		var urlObj=url.parse(req.url,true);
		var date=new Date(urlObj.query.iso);
		if(urlObj.pathname==="/api/parsetime"){
			result=parseTime(date);
		}
		else if(urlObj.pathname==="/api/unixtime"){
			result=unixTime(date);
		}

		if(result){
			res.writeHead(200,{'Content-Type':'application/json'});
			res.write(JSON.stringify(result));
			res.end();
		}
	}
})

server.listen(process.argv[2]);

function parseTime(date){
	return {
		hour:date.getHours(),
		minute:date.getMinutes(),
		second:date.getSeconds()
	}
}

function unixTime(date){
	return {unixtime:date.getTime()}
}