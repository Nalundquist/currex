import fetch from 'node-fetch';

export class CurrEx {

	constructor(amount, currency){
		this.convertAmt = amount;
		this.convertFrom = currency;
	}

	apiGet() {
		const convertFrom = this.convertFrom
		let currPromise = new Promise(function(resolve, reject){
			const currRequest = new XMLHttpRequest;
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
			return response.result;
		}, function(response){
			return response.result;
		})
	}
}