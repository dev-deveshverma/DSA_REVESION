//Enter code here
function runProgram(input) {
    input=input.split('\n');
    let n = +input[0];
    let str=input[1].split("");
    subSequence(str,0,"");
       
}

function subSequence(str,x,y){
  if(y.length > 0){
      console.log(y);
  }
  if(y == str.length){
      return;
  }
  for(let i=x; i< str.length; i++){
      subSequence(str,i+1,y+str[i])
  }
  
}




if (process.env.USERNAME === "") {
	runProgram(``);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}