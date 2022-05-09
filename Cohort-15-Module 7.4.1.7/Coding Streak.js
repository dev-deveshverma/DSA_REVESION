function runProgram(input) {
	input=input.split('\n');
	let days=+input[0];
	let tmp,arr=[];
	for(let i=1;i<=days;i++){
	    tmp=input[i].split("");
	    arr.push(tmp);
	}
	
	let counter=0;
	let max=-1;
	let steak=0;
	let perday=-1;
	for(i=0;i<days;i++){
	    for(let j=0;j<arr[i].length;j++){
	        if(arr[i][j]=='C'){
	            counter++;
	            steak++;
	            if(perday<steak){   
	                perday=steak;      
	            }
	            continue;
	        }
	        else if(arr[i][j]!='C'){
	            if(max<counter){
	                max=counter;
	            }
	            counter=0;
	            steak=0; 
	        }
	    }
	    steak=0;
	}
	console.log(perday+" "+max);
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