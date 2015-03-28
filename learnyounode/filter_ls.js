var fs=require('fs');
var path=require('path');

var dir=process.argv[2];
var extFt=process.argv[3];

function filterLs(){
	fs.readdir(dir,function (err,list){
		for(var i=0;i<list.length;i++){
			var ext=path.extname(list[i]);
			if(ext.substring(1)===extFt)
				console.log(list[i]);
		}
	})
}

filterLs();