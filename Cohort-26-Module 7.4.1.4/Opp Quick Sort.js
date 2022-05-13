//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let n = +input[0];
    let arr = input[1].split(" ").map(Number);
    console.log(quickSort(arr).join(" "));
 }
 function quickSort(arr){
   if(arr.length <=1){
       return arr;
   }
   let pivot = Math.floor(Math.random()* arr.length);
   let left_arr = [];
   let right_arr = [];
   for(let i=0; i<arr.length; i++){
       if(i==pivot){
           continue;
       }else if(arr[i]<arr[pivot]){
           left_arr.push(arr[i]);
       }else{
           right_arr.push(arr[i]);
       }
   }
   return [...quickSort(right_arr), arr[pivot], ...quickSort(left_arr)];
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