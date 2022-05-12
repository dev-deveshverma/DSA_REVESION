//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let [n,k] = input[line++].split(" ").map(Number);
        let arr = input[line++].split(" ").map(Number);
        console.log(twoSum(n,k,arr));
    }
 }
 function twoSum(n,k,arr){
   let x=-1;
   let y=-1;
     for(let i=0;i<n;i++){
         for(let j=0;j<n;j++){
             if(arr[i]+arr[j]==k){
                if(i<j){
                    let ini=i+" "+j;
                    return ini;
                }
             }
         }
 
    }
 let ans=x+" "+y;
 return ans;
     
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
 