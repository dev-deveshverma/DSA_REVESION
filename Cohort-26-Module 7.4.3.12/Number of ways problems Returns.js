function runProgram(input) {
    let n=+input;
    check(n);
 }
 function check(n){
     let arr=Array(n+1).fill(-1);
     function n_way(n){
         if(n===0){
             return 1;
         }
          if(n<=0){
             return 0;
         }
         if(arr[n]==-1){
             arr[n]=n_way(n-1)+n_way(n-2)+n_way(n-3);
            //   console.log(arr);
         }
         return arr[n];
     }
     let ans=n_way(n);
     console.log(ans);
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