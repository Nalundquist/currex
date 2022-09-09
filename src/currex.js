import {errorReturn} from './index.js';
// import {currCalc} from './currcalc.js';
import {currDisplay} from './index.js';

export class CurrEx {

	constructor(amount, currencyFrom, currencyTo){
		this.convertAmt = amount;
		this.convertFrom = currencyFrom;
		this.convertTo = currencyTo;
	}
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
			this.convertMult = 0;
			this.convertFinal = 0;
			this.errorMessage = "";
			if (this.convertTo === "USD"){
				this.convertMult = response.conversion_rates.USD;
			} else if (this.convertTo === "TND"){
				this.convertMult = response.conversion_rates.TNR;
			} else if (this.convertTo === "OMR"){
				this.convertMult = response.conversion_rates.OMR;
			} else if (this.convertTo === "NPR"){
				this.convertMult = response.conversion_rates.NPR;
			} else if (this.convertTo === "STN"){
				this.convertMult = response.conversion_rates.STN;
			} else if (this.convertTo === "RUB"){
				this.convertMult = response.conversion_rates.RUB;
			} else if (this.convertTo === "SEK"){
				this.convertMult = response.conversion_rates.SEK;
			} else if (this.convertTo === "HTG"){
				this.convertMult = response.conversion_rates.HTG;
			} else if (this.convertTo === "CLP"){
				this.convertMult = response.conversion_rates.CLP;
			} else if (this.convertTo === "KPW"){
				this.errorMessage = `North Korean Won is an unsupported currency at this time, apologies for the inconvenience.`;
			} else {
				this.errorMessage = `Error: Unsupported Currency`
			}
			this.convertFinal = (this.convertAmt * this.convertMult)
			currDisplay(this.convertTo, this.convertFrom, this.convertAmt, this.convertFinal, this.errorMessage);
		}, (errorMessage) => {
			errorReturn(errorMessage);
		});
	}


}