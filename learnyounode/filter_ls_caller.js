var lsModule=require("./filter_ls_module.js");
var dir=process.argv[2];
var fileExt=process.argv[3];

var result=lsModule(dir,fileExt,function(err,data){
	if(err)
		return console.error('there was an error',err);
	for(var i=0;i<data.length;i++){
		console.log(data[i]);
	}
});
