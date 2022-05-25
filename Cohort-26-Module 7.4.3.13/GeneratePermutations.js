//Em
function runProgram(input) {
    input=input.split('\n');
        let arr=input[1].split(" ").join("");
        let res="";
        generatePermutation(arr,res);
}

function generatePermutation(arr,res){
    if(arr.length==0){
        console.log(res.split("").join(" "));
        return;
    }
    for (let i = 0; i <arr.length; i++) {
        let c=arr[i];
        let left=arr.slice(0,i);
        let right=arr.slice(i+1);
        let newStr=left+right;
        generatePermutation(newStr,res+c);
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
