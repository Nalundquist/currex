import './css/styles.css';
import { CurrEx } from './currex.js';

//Business Logic

const apiGet = (amt, convertTo, convertFrom) => {
	let promise = CurrEx.apiGet(convertFrom);
	promise.then((response) => {
		currConvert(response, amt, convertTo, convertFrom);
	}, (errorMessage) => {
		errorReturn2(errorMessage);
	});
}

const currConvert = (response, amt, convertTo, convertFrom) => {
	let convertMult = 0;
	let convertFinal = 0;
	let errorMessage = "";
	console.log(convertTo)
	console.log(convertTo === "KPW")
	if (convertFrom === null || convertTo === null || convertFrom === "KPW" || convertTo === "KPW"){
		errorMessage = `Error: Unsupported Currency`;
		errorReturn1(errorMessage)
	} else {
		convertMult = response.conversion_rates[convertTo]
		convertFinal = (amt * convertMult);
		currDisplay(convertTo, convertFrom, amt, convertFinal);
	}
}

//UI Logic

const errorReturn1 = (error) => {
	const convResult = document.getElementById("convert-result");
	const h3 = document.createElement("h3");
	convResult.append(h3);
	h3.append(error);
	convResult.setAttribute("class", "result-display");
	convResult.removeAttribute("class", "hidden")
}

const errorReturn2 = (errorMessage) => {
	const convResult = document.getElementById("convert-result");
	convResult.innerHTML = null
	const h4 = document.createElement("h4");
	convResult.append(h4);
	h4.append(`Cannot convert currencies: ${errorMessage[0].status} ${errorMessage[1].result} - ${errorMessage[1].errortype}`)
	convResult.setAttribute("class", "result-display");
	convResult.removeAttribute("class", "hidden")
}

const currDisplay = (to, from, amt, final) => {
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
	apiGet(convertAmt, convertTo, convertFrom);
}

window.addEventListener("load", function(){
	document.getElementById("curr-input").addEventListener("submit", formSubmit);
})
