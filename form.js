function alertSubFunc(){
	const element = document.getElementById("email");
	const value = element.value;
	window.alert("Email: " + value);
}
window.onload = function() {
document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

