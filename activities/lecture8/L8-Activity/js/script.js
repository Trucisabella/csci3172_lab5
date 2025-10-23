// CSCI 3172 L8 Activity
// @author: Truc Tran (B00812018)

function addition(event) {
	event.preventDefault();
	const a = parseFloat(document.getElementById("number1").value);
	const b = parseFloat(document.getElementById("number2").value);
	const sum = a + b;
	console.log("Sum: " + sum);
	document.getElementById("result").textContent = "Sum: " + sum;
}

function subtraction(event) {
	event.preventDefault();
	const a = parseFloat(document.getElementById("number1").value);
	const b = parseFloat(document.getElementById("number2").value);
	const difference = a - b;
	console.log("Difference: " + difference);
	document.getElementById("result").textContent = "Difference: " + difference;
}

function multiplication(event) {
	event.preventDefault();
	const a = parseFloat(document.getElementById("number1").value);
	const b = parseFloat(document.getElementById("number2").value);
	const product = a * b;
	console.log("Product: " + product);
	document.getElementById("result").textContent = "Product: " + product;
}

function division(event) {
	event.preventDefault();
	const a = parseFloat(document.getElementById("number1").value);
	const b = parseFloat(document.getElementById("number2").value);
	if (b === 0) {
		console.log("Error: Division by zero");
		document.getElementById("result").textContent = "Cannot divide by zero";
	} else {
		const quotient = a / b;
		console.log("Quotient: " + quotient);
		document.getElementById("result").textContent = "Quotient: " + quotient;
	}
}

function arrayCheck(event) {
	event.preventDefault();
	evenOddArray();
	evenOddArrayItems();
}

function evenOddArray() {
	const input = document.getElementById("numberArray").value;
	const numberArray = input.split(",").map(Number)
	const arrLength = numberArray.length;
	let results = "";
	let isInvalid = false;
	numberArray.forEach(num => {
		if (isNaN(num)) {
			isInvalid = true;
			return;
		}
	});

	if (isInvalid) {
		results = "Not a number!";
		document.getElementById("arrayResult").textContent = results;
		return;
	}

	if (arrLength % 2 === 0) {
		results = "even";
	}
	else {
		results = "odd";
	}
	console.log("Total number of items in the array is: " + results);
	document.getElementById("arrayResult").textContent = "Total number of items in the array is: " + results;
}


function evenOddArrayItems() {
	const input = document.getElementById("numberArray").value;
	const numberArray = input.split(",").map(Number);
	let results = "";
	let isInvalid = false;
	numberArray.forEach(num => {
		if (isNaN(num)) {
			isInvalid = true;
			return;
		}
		else {


			if (num % 2 === 0) {
				results += "even ";
			} else {
				results += "odd ";
			}
		}
	});
	if (isInvalid) {
		results = "Not a number!";
		document.getElementById("arrayItemsResult").textContent = results;
		return;
	}

	console.log("Each numeric value in the array is: " + results);
	document.getElementById("arrayItemsResult").textContent = "Each numeric value in the array is: " + results;
}
