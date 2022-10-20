function clicked(id) {
	alert(id)
	setScreen(id)
}

function setScreen(text) {
	document.getElementById("screentext").value = text;
}