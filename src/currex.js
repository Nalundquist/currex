export class CurrEx {
	static apiGet(convertFrom) {
		let promise = new Promise(function(resolve, reject){
			let currRequest = new XMLHttpRequest();
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
		return promise
	}
}
