function displayFormulaOne() {
	document.getElementsByClassName("formulaOne")[0].classList.toggle("show");
}

function displayFormulaTwo() {
	document.getElementsByClassName("formulaTwo")[0].classList.toggle("show");
}

function formConfirmation() {
	document.getElementById("pageContentContainer").outerHTML = "";
	document.getElementById("formConfirmationMessage").innerHTML = "Thank you! We have received your inquiry and will get back to you within 48 hours.";
}