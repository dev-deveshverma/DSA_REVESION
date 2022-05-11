//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let brackets = input[line++].split("");
        if(classicalProb(brackets)==true){
            console.log("balanced");
        }else{
            console.log("not balanced")
        }
    }
 }
 function classicalProb(brackets){
     let stack = [];
     for(let i=0; i<brackets.length; i++){
         let tmp = brackets[i];
         if(tmp =='(' || tmp=='{' || tmp =='['){
             stack.push(tmp);
             continue;
         }
         
         if(stack.length == 0){
             return false;
         }
         
         let check;
         switch(tmp){
             case ')':
                 check = stack.pop();
                 if(check == '{' || check == '[')
                    return false;
                 break;
             case '}':
                 check = stack.pop();
                 if(check == '(' || check == '[')
                    return false;
                 break;
             case ']':
                 check = stack.pop();
                 if(check == '(' || check=='{')
                    return false;
                 break;
         }
     }
     if(stack.length == 0){
         return true;
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