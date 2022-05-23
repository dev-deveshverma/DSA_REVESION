function runProgram(input) {
    input=input.split("\n");
    let s1=input[0].split("").sort();
    let s2=input[1].split("").sort();
    
    AnalogDetect(s1,s2)
 }
 
 function AnalogDetect(s1,s2){
     let str1=[];
     let str2=[];
     
     for(let i=0;i<s1.length;i++){
         if(s1[i]!==" "){
             str1.push(s1[i])
         }
     }
     for(i=0;i<s2.length;i++){
         if(s2[i]!==" "){
             str2.push(s2[i])
         }
     }
     str1=str1.join("");
     str2=str2.join("");
     
     str1==str2 ? console.log("True") : console.log("False");
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
