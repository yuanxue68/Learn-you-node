var net =require('net');

function zeroFill(i){
	if(i<10)
		return '0'+i;
	else
		return i;
}

var server=net.createServer(function callback(socket){
	var data=new Date();
	var date=zeroFill(data.getFullYear())+"-"+zeroFill(data.getMonth()+1)
	+"-"+zeroFill(data.getDate());
	var time=zeroFill(data.getHours())+":"+zeroFill(data.getMinutes());
	socket.write(date+" "+time);
	socket.end();	
})

server.listen(process.argv[2]);