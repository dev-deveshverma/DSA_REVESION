function runProgram(input) {
    input=input.split("\n");
    var size= +input[0];
    for(var i=1;i<=size;i++){
        var[x,y]=input[i].split(" ").map(Number);
        console.log(gdc(x,y));
    }
 }
 function gdc(x,y){
     if(x==0){
         return y;
     }
     return gdc(y%x, x);
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