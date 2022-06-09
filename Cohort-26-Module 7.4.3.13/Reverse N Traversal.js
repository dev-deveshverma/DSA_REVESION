function runProgram(input) {
	input = input.trim().split("\n")
	var total_count = +input[0];
var	line = 1
	for(var i = 0 ;i<total_count;i++){
	    var mat = [];
	    var n = +input[line++];
	    for(var j=0;j<n;j++){
	        var each_row = input[line++].split(" ").map(Number);
	        mat.push(each_row);
	    }
	    myfunc(mat,n)
	}
}
function myfunc(mat,n){
    if(n==1){
        return console.log(mat[0].join(" "))
    }
    var ans = []
    for(var i = 0;i<n;i++){
        ans.push(mat[i][0])
    }
    var left = 1 ;
    var bottom = n-2 ;
    while(left<=n-2 && bottom >=1){
        ans.push(mat[bottom][left])
        bottom-- ;
        left++
    }
    for(var i = 0;i<n;i++){
        ans.push(mat[i][n-1])
    }
    console.log(ans.join(" "))
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