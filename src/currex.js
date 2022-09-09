import fetch from 'node-fetch';

export class CurrEx {

	constructor(amount, currency){
		this.convertAmt = amount;
		this.convertFrom = currency;
	}

	apiGet() {
		const convertFrom = this.convertFrom
		 return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${convertFrom}`)
			.then(function(response){
				if (!response.ok) {
					const errorMsg = `${response.result} ${response.error-type}`
					throw new Error(errorMsg); 
				} else {
					return response.json();
				}
			})
			.catch(function(error) {
				return error;
			});
	}
}