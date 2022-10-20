
let screentext = ""
let lastInputType
let hasPointAfterOperation = false
function clicked(id) {
	let num = Number(id)
	if (!isNaN(num)){
		setScreen(screentext + num)
	}
	else {
		let symbol = toSymbolPrint(id)
		if (symbol)
			setScreen(screentext + symbol)
		else {
			let result = evaluate()
			setScreen(result)
		}
	}
}

function setScreen(text) {
	document.getElementById("screentext").value = text;
	screentext = text
}

function clearScreen() {
	setScreen("")
}

function toSymbolPrint(id){
	switch(id) {
		case "point":
		  return ".";
		case "plus":
			return " + ";
		case "minus":
			return " - ";
		case "multiply":
			return " x ";
		case "divide":
			return " / ";
		default:
			return null
	}
}

function evaluate(){
	let evaltext = screentext.replace("x", "*")
	return eval(evaltext)
}
