function runProgram(input) {
    var n=+input;
   console.log(fib(n));
}

    function fib(n){
    let dpArray=[];
    dpArray.push(0);
    dpArray.push(1);
    
    for(let i=2;i<=n;i++){
        dpArray[i]=dpArray[i-1]+dpArray[i-2];
    }
    return dpArray[n]
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
 