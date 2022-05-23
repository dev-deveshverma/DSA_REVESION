function runProgram(input) {
    input=input.split('\n');
    let [n,c,r]=input[0].split(" ").map(Number);
    let arr=input[1].split(" ").map(Number);
    
    birthdayParty(n,c,r,arr);
 }
 
 function birthdayParty(n,c,r,arr){
      arr=arr.sort(function(a,b){
          return a-b;
      });
     let sum=0;
     for(i=0;i<c;i++){
         sum+=arr[i];
     }
     if(sum<=r){
         console.log("Party");
     }
     else{
         console.log("Sad");
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