function runProgram(input) {
    var [n,r]=input.split(" ").map(Number);
   console.log(gprecursion(n,r).toFixed(4));
 }
 function gprecursion(n,r){
     if(n===0){
         return 1;
     }
     
     else{
         return (1/r**n+gprecursion(n-1,r));
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