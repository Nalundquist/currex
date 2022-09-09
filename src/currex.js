import {errorReturn} from './index.js';
// import {currCalc} from './currcalc.js';
import {currDisplay} from './index.js';

export class CurrEx {

	constructor(amount, currencyFrom, currencyTo){
		this.convertAmt = amount;
		this.convertFrom = currencyFrom;
		this.convertTo = currencyTo;
	}

	// storeApi(currApi){
	// 	for (i = 0; i > currApi.conversion_rates.length; i++) () => {
	// 		sessionStorage.setItem(currApi.conversion_rates[i].key);
	// 		sessionStorage.setItem(currApi.conversion_rates[i].value);
	// 		console.log(sessionStorage);
	// 	}
	// 	this.storedApi = sessionStorage;
	// }

	// currCalc(response) {
	// 	this.convertMult = 0;
	// 	this.convertFinal = 0;
	// 	if (this.convertTo === "USD"){
	// 		this.convertMult = response.conversion_rates.USD;
	// 	} if (this.convertTo === "TND"){
	// 		this.convertMult = response.conversion_rates.TNR;
	// 	} if (this.convertTo === "OMR"){
	// 		this.convertMult = response.conversion_rates.OMR;
	// 	} if (this.convertTo === "NPR"){
	// 		this.convertMult = response.conversion_rates.NPR;
	// 	} if (this.convertTo === "STN"){
	// 		this.convertMult = response.conversion_rates.STN;
	// 	} if (this.convertTo === "RUB"){
	// 		this.convertMult = response.conversion_rates.RUB;
	// 	} if (this.convertTo === "SEK"){
	// 		this.convertMult = response.conversion_rates.SEK;
	// 	} if (this.convertTo === "HTG"){
	// 		this.convertMult = response.conversion_rates.HTG;
	// 	} if (this.convertTo === "CLP"){
	// 		this.convertMult = response.conversion_rates.CLP;
	// 	} else {
	// 		this.errorMessage = `${this.convertTo} is an unsupported currency at this time, apologies for the inconvenience.`;
	// 	}
	// 	this.convertFinal = (this.convertAmt * this.convertMult).toFloat(2);
	// 	currDisplay(this.convertTo, this.convertFrom, this.convertAmt, this.convertFinal);
	// }
	
	apiGet() {
		const convertFrom = this.convertFrom
		let currPromise = new Promise(function(resolve, reject){
			let currRequest = new XMLHttpRequest;
			const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${convertFrom}`
			currRequest.addEventListener("loadend", function(){
				const currResponse = JSON.parse(this.responseText);
				if (this.status === 200){
					resolve(currResponse);
					console.log(currResponse);
				} else {
					reject([this, currResponse]);
				}
			})
			currRequest.open("GET", url, true);
			currRequest.send();
		})
		currPromise.then((response) => {
			// console.log(response)
			// CurrEx.currCalc(response);
			this.convertMult = 0;
			this.convertFinal = 0;
			if (this.convertTo === "USD"){
				this.convertMult = response.conversion_rates.USD;
			} if (this.convertTo === "TND"){
				this.convertMult = response.conversion_rates.TNR;
			} if (this.convertTo === "OMR"){
				this.convertMult = response.conversion_rates.OMR;
			} if (this.convertTo === "NPR"){
				this.convertMult = response.conversion_rates.NPR;
			} if (this.convertTo === "STN"){
				this.convertMult = response.conversion_rates.STN;
			} if (this.convertTo === "RUB"){
				this.convertMult = response.conversion_rates.RUB;
			} if (this.convertTo === "SEK"){
				this.convertMult = response.conversion_rates.SEK;
			} if (this.convertTo === "HTG"){
				this.convertMult = response.conversion_rates.HTG;
			} if (this.convertTo === "CLP"){
				this.convertMult = response.conversion_rates.CLP;
			} else {
				this.errorMessage = `${this.convertTo} is an unsupported currency at this time, apologies for the inconvenience.`;
			}
			this.convertFinal = (this.convertAmt * this.convertMult)
			currDisplay(this.convertTo, this.convertFrom, this.convertAmt, this.convertFinal);
		}, (errorMessage) => {
			errorReturn(errorMessage);
		});
	}


}