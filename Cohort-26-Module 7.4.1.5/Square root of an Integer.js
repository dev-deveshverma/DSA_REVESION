//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let line =0;
    let tc = +input[line];
    line++;
     for(let i=0; i<tc; i++){
         let n = +input[line];
         line++;
         console.log(findout(n));
     }
 }
 function findout(n){
     let start = 0;
     let end = n; 
     let res = -1;
     while(start<=end){
         let mid = start+(end-start)/2;
         let rem = mid%1;
         mid = mid-rem;
         if(mid*mid==n){
             return mid;
         }
         else if(mid*mid<n){
             start = mid+1;
             res = mid;
         }
         else{
             end = mid-1;
         }
         
     }
     return res;
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