//Enter code here
function runProgram(input) {
    input= input.split("\n");
    let tc= +input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        let [N]= input[line].split(" ").map(Number);
        line++;
        let arr= input[line].split(" ").map(Number);
     line++;
    maxPeek(N,arr);
    }
  
}
function maxPeek(N,arr){
    for(let i=0;i<N;i++){
        if(arr[i]>arr[i+1] &&arr[i]>arr[i-1]){
            console.log(i);
        }
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