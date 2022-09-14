// Vue + Pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useCurrencyStore } from './stores/currency'
import App from './App.vue'

// Styles
import './assets/main.scss'
import './assets/theme.scss'

// Pinia
const pinia = createPinia()
const currenciesStore = useCurrencyStore(pinia)

// Fetch currencies to display
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	.then(resp => resp.json())
	.then(data => {
		// Inject currencies to currencies store
		currenciesStore.$state = { currencies: data }

		// Setup app
		const app = createApp(App)
		app.use(pinia)
		app.mount('#app')
	})