import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
	state: () => ({
		currencies: null
	}),
	getters: {
		valueOfCurrency: (state) => {
			return (currencyCode) => {
				let valute = state.currencies.Valute[currencyCode]
				return {
					name: valute.Name,
					prev: valute.Previous ?? 0,
					now: valute.Value ?? 0
				}
			}
		},
		currenciesCodes: (state) => Object.keys(state.currencies.Valute)
	}
})