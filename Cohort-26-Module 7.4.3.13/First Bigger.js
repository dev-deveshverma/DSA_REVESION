//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let n = +input[0];
    let line = 1;
    let arr = input[line].split(" ").map(Number);
    line++;
    let tc = +input[line];
    line++;
    for(let i=0; i<tc; i++){
        let k = +input[line];
        line++;
       firstBigger(n,k,arr);
     // console.log(n,k,arr);
    }
 }
 function firstBigger(n,k,arr){
     arr = arr.sort((a,b)=>a-b);
     let flag = false;
     for(let i=0; i<n; i++){
         if(arr[i]>k){
             console.log(arr[i]);
             flag = true;
             break;
         }
     }
     if(flag==false){
         console.log(-1);
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