//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let [n,k] = input[0].split(" ").map(Number);
    let arr = input[1].split(" ").map(Number);
    console.log(maximum(n,k,arr));
 }
 
 function maximum(n,k,arr){
    let max=0;
    let sum=0;
    
     for(let i=0;i<k;i++){
         sum +=arr[i];
     }
     if(sum>max){
         max=sum;
     }
     for(let i=k;i<n;i++){
         sum +=arr[i];
         sum =sum-arr[i-k];
         if(sum>max){
             max=sum;
         }
     }
  return max; 
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