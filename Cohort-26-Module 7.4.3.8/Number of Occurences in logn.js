//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let [n,k]= input[0].split(" ").map(Number);
    let arr = input[1].split(" ").map(Number);
    console.log(frequencyInSortedArray(arr,k));
    
 }
 
 function lowerBound(arr, k){
        let low = 0, high = arr.length - 1;
        let ans = -1 ;
         while (low <= high){
           let  mid = Math.floor(low + (high - low)/2);
             if (arr[mid] == k){
                 ans = mid;
                 high = mid - 1;
             }
             else if (arr[mid] > k){
                 high = mid - 1;
             }
             else{ 
                 low = mid + 1;
             }
         }
         return ans;
 }
 function upperBound(arr, k){
        let low = 0, high = arr.length - 1;
        let ans = -1 ;
         while (low <= high){
           let  mid = Math.floor(low + (high - low)/2);
             if (arr[mid] == k){
                 ans = mid;
                 low = mid + 1;
             }
             else if (arr[mid] > k){
                 high = mid - 1;
             }
             else{ 
                 low = mid + 1;
             }
         }
         return ans;
 }
 
 function frequencyInSortedArray(arr, k){ 
        let lowerbound = lowerBound(arr,k);
        let upperbound = upperBound(arr,k);
         if (lowerbound == -1)
             return 0;
         let ans = upperbound - lowerbound + 1;
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