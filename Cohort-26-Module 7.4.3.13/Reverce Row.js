//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let n = +input[0];
    let mat =[];
    let line=1;
    for(let i=0; i<n; i++){
        mat.push(input[line].split(" ").map(Number));
        line++;
    }
    Rowreverce(n,mat);
 }
 function Rowreverce(n,mat){
     for(let i=0; i<n; i++){
     let ans = [];
         for(let j=n-1; j>=0; j--){
             ans.push(mat[i][j]);
         }
            console.log(ans.join(" "));
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