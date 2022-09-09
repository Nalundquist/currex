import './css/styles.css';
import { CurrEx } from './currex.js';



const formSubmit = (event) => {
	event.preventDefault();
	const convResult = document.getElementById("convert-result");
	convResult.innerHTML = null;

	const convertFrom = document.getElementById("convert-from").value;
	const convertTo = document.getElementById("convert-to").value;
	const convertAmt = document.getElementById("convert-amt").value;
	document.getElementById("convert-from").value = null;
	document.getElementById("convert-to").value = null;
	document.getElementById("convert-amt").value = null;

	let currEx = new CurrEx(convertAmt, convertFrom, convertTo);

	currEx.apiGet();

	if (currEx.errorMessage){
		const h3 = document.createElement("h3");
		convResult.append(h3);
		h3.append(currEx.errorMessage);
	}
}

const errorReturn = (errorMessage) => {
	const convResult = document.getElementById("convert-result");
	convResult.innerHTML = null
	const h4 = document.createElement("h4");
	convResult.append(h4);
	h4.append(`Cannot convert ${errorMessage[0].convertFrom} to ${errorMessage[0].convertTo}: ${errorMessage[1].result} ${errorMessage[1].error-type}`)
}