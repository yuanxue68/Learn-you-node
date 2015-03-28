var fs=require('fs');
var path=require('path');
module.exports=function(dir,extFt,callback){
	fs.readdir(dir,function(err,list){
		if(err)
			return callback(err)
		var array=[];
		for(var i=0;i<list.length;i++){
			var ext=path.extname(list[i]);
			if(ext.substring(1)===extFt){
				array.push(list[i]);
			}
		}
		return callback(err,array);		
	})
}