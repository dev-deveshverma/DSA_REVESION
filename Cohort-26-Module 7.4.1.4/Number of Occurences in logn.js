function runProgram(input) {
    input =input.split("\n");
    let [n,k] =input[0].split(" ").map(Number);
    let arr =input[1].split(" ").map(Number);
    
 let lower =low(n,k,arr);
   let upper = high(n,k,arr);
 console.log(upper-lower+1);
}
function low(n,k,arr){
   let start =0;
   let end=n-1;
   let ans =-1;
   while(start<=end){
       let mid =Math.floor((start+end)/2);
       
       if(arr[mid]==k){
           ans =mid;
           end =mid-1;
       }else if(arr[mid]>k){
           end =mid-1;
       }else{
           start =mid+1;
       }
   }
   return ans;
}
function high(n,k,arr){
   let start =0;
   let end=n-1;
   let ans =-1;
   while(start<=end){
       let mid =start +Math.floor((end-start)/2);
       
       if(arr[mid]==k){
           ans =mid;
          start=mid+1;
       }else if(arr[mid]>k){
           end =mid-1;
       }else{
           start =mid+1;
       }
   }
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