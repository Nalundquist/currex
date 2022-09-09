import { CurrEx } from './../src/currex.js'

describe ('CurrEx', () => {

	test('should hold currency keys', () => {
		const currInput = new CurrEx(134.56, 'USD');
		expect(currInput.convertFrom).toEqual('USD');
		expect(currInput.convertAmt).toEqual(134.56);
	})

	describe ('apiGet', () => {

		test('fetches exchange API, holds JSON.parse', () => {
			const currInput = new CurrEx(134.56, 'USD');
			const apiGetResult = apiGet(currInput.convertFrom);
			expect(apiGetResult).toEqual("success");
		})
	})

})