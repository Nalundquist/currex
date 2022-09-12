import './css/styles.css';
import { CurrEx } from './currex.js';

export const errorReturn = (errorMessage) => {
	const convResult = document.getElementById("convert-result");
	convResult.innerHTML = null
	const h4 = document.createElement("h4");
	convResult.append(h4);
	h4.append(`Cannot convert currencies: ${errorMessage[0].status} ${errorMessage[1].result} - ${errorMessage[1].errortype}`)
	convResult.setAttribute("class", "result-display");
	convResult.removeAttribute("class", "hidden")
}

export const currDisplay = (to, from, amt, final, error) => {
	const convResult = document.getElementById("convert-result");
	if (error != ""){
		const h3 = document.createElement("h3");
		convResult.append(h3);
		h3.append(error);
		convResult.setAttribute("class", "result-display");
		convResult.removeAttribute("class", "hidden")
	}	else {
	const convResult = document.getElementById("convert-result");
	convResult.innerHTML = null;
	const h2 = document.createElement("h2");
	const h4 = document.createElement("h4");
	convResult.append(h2);
	h2.append(`${final.toFixed(2)} ${to} `)
	h2.after(h4);
	h4.append(`is the equivalent of ${amt} ${from}`);
	convResult.setAttribute("class", "result-display");
	convResult.removeAttribute("class", "hidden")
	}
}

const formSubmit = (event) => {
	event.preventDefault();
	const convResult = document.getElementById("convert-result");
	convResult.innerHTML = null;
	convResult.setAttribute("class", "hidden");
	convResult.removeAttribute("class", "result-display")
	const convertFrom = document.getElementById("convert-from").value;
	const convertTo = document.getElementById("convert-to").value;
	const convertAmt = document.getElementById("convert-amt").value;
	document.getElementById("convert-from").value = "USD";
	document.getElementById("convert-to").value = "USD";
	document.getElementById("convert-amt").value = 0.00;
	let currEx = new CurrEx(convertAmt, convertFrom, convertTo);
	currEx.apiGet();
}

window.addEventListener("load", function(){
	document.getElementById("curr-input").addEventListener("submit", formSubmit);
})
