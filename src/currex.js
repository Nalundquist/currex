import {currCalc} from './index.js'

export class CurrEx {

	constructor(amount, currency){
		this.convertAmt = amount;
		this.convertFrom = currency;
	}

	storeApi(currApi){
		for (i = 0; i > currApi.conversion_rates.length; i++) () => {
			sessionStorage.setItem(currApi.conversion_rates[i].key);
			sessionStorage.setItem(currApi.conversion_rates[i].value);
			console.log(sessionStorage);
		}
		this.storedApi = sessionStorage;
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
				} else {
					reject([this, currResponse]);
				}
			})
			currRequest.open("GET", url, true);
			currRequest.send();
		})
		currPromise.then(function(response){
			currCalc(response)
		}, function(errorMessage){
			errorReturn(errorMessage);
		})
	}

}