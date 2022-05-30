function runProgram(input) {
	input = input.split("\n");
	let N = +input[0];
	let arr = input[1].split(" ").map(Number);
	
	search(N , arr)

    
}
function search(N , arr){
    let index = 0;
    let min = arr[0];
    let flag = 1;
    let flag1 = 1;
    for(let i = 0; i<N; i++){
        if(arr[i] < arr[i-1]){
            min = arr[i];
            index = i
        }
    }
    for(let i = 1; i<index; i++){
        if(arr[i] < arr[i-1]){
            flag = 0;
            break;
        }
    }
    for(let i = index+1; i<N; i++){
        if(arr[i]< arr[i-1]){
            flag1 = 0;
            break;
        }
    }
    if(flag && flag1 && arr[N-1] < arr[0]){
        console.log("YES")
    }
    else{
        console.log("NO")
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