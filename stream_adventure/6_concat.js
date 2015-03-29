var concat=require('concat-stream');

concatStream=concat(function(data){
	process.stdout.write(data.toString().split('').reverse().join(''));
})


process.stdin.pipe(concatStream);