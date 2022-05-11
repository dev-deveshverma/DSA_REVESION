//Enter code here
function runProgram(input) {
    input= input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var N= input[line].split(" ").map(Number);
        line++;
        var arr= input[line].split(" ").map(Number);
     line++;
    removeDuplicates(N,arr);
    }
  
}
function removeDuplicates(N,arr){
    var ans=[];
    for(let i=0;i<N;i++){
        if(arr[i]!=arr[i+1]){
          ans.push(arr[i]);  
        }
    }
    console.log(ans.length);
    console.log(ans.join(" "));
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