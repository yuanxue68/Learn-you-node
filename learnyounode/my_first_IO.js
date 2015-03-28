var fs=require('fs');
var buf=new Buffer(fs.readFileSync(process.argv[2]));
var str=buf.toString();
var split=str.split('\n');
console.log(split.length-1);