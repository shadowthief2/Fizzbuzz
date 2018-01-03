// JavaScript Document
var type = ["Fizz","Buzz"]; //Change here to adjust outputs
var primes = [3,5]; //Change here to adjust tests

console.log(primes.length);

function checkType(entry){
	"use strict";
	for (var i = 0; i < primes.length; i++){
		if (entry % primes[i] === 0){
			output += type[i];
		}
	}
}

for (var i=1; i<100; i++){
	var output = "";
	checkType(i);

	if (output === ""){
		output = i;
	}

	document.write(output + "<br/>");
}
