let inputforms = 
	document.querySelectorAll( 
		".conversion"); 
inputforms.forEach( 
	(form) => 
		(form.style.display = "none")); 
let category = document.getElementById( 
	"conversionCategory"); 
category.addEventListener( 
	"change", 
	function () { 
		let userInput = category.value; 
		inputforms.forEach( 
			(form) => 
				(form.style.display = 
					"none")); 
		document.getElementById( 
			userInput) 
			.style.display = "block";}); 
document 
	.getElementById( 
		"temperatureConvertBtn") 
	.addEventListener("click", tempFn);  
document 
	.getElementById("weightConvertBtn") 
	.addEventListener( 
		"click", weightFn); 
document 
	.getElementById("lengthConvertBtn") 
	.addEventListener( 
		"click", lengthFn);  
function tempFn() { 
	let valInput = parseFloat( 
		document.getElementById( 
			"temperatureInput"
		).value); 
	let fromUnit = 
		document.getElementById( 
			"fromTemperatureUnit").value; 
	let toUnit = 
		document.getElementById( 
			"toTemperatureUnit").value; 
	let result; 
	if (fromUnit === "celsius" && 
		toUnit === "fahrenheit") { 
		result = 
			(valInput * 9) / 5 + 32;}  
	else if (fromUnit === "fahrenheit" && 
			toUnit === "celsius") { 
		result = 
			((valInput - 32) * 5) / 9;}  
	else { 
		result = valInput;} 
	document.getElementById( 
		"temperatureResult"
	).textContent = `Result: ${result.toFixed( 
		2 
)}`;} 

function weightFn() { 
	let valInput = parseFloat( 
		document.getElementById( 
			"weightInput").value); 
	let fromUnit = 
		document.getElementById( 
			"fromWeightUnit").value; 
	let toUnit = 
		document.getElementById( 
			"toWeightUnit").value;  
		let result; 
		if (fromUnit === "pounds" && 
			toUnit === "kilograms") { 
			result = 
				(valInput * 0.453592);}  
		else if (fromUnit === "kilograms" && 
				toUnit === "pounds") { 
			result = 
				(valInput * 2.20462);}  
		else { 
			result = valInput;} 
		document.getElementById( 
			"weightResult"
		).textContent = `Result: ${result.toFixed( 
			2 
	)}`; 
} 

function lengthFn() { 
	let valInput = parseFloat( 
		document.getElementById( 
			"lengthInput"
		).value); 
	let fromUnit = 
		document.getElementById( 
			"fromLengthUnit").value; 
	let toUnit = 
		document.getElementById( 
			"toLengthUnit").value; 
			let result; 
			if (fromUnit === "miles" && 
				toUnit === "kilometers") { 
				result = 
					(valInput * 1.60934);}  
			else if (fromUnit === "kilometers" && 
					toUnit === "miles") { 
				result = 
					(valInput * 0.621371);}  
			else { 
				result = valInput;} 
			document.getElementById( 
				"lengthResult"
			).textContent = `Result: ${result.toFixed( 
				2 
		)}`;
    } 
