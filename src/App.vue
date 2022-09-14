<script setup>
import { ref } from 'vue'
import TheContainer from './components/TheContainer.vue'
import ConverterCard from './components/ConverterCard.vue'
import SearchCard from './components/SearchCard.vue'
import PairCard from './components/PairCard.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

// Stores
import { useCurrencyStore } from './stores/currency'
const currencyStore = useCurrencyStore()

// Constants
const allCodes = currencyStore.currenciesCodes

// Data
const codes = ref(allCodes) // all currencies as codes

// Event listeners
function onSeach(searchQuery) {
	// Capitalize
	searchQuery = searchQuery.toUpperCase()

	// Filter currencies by query
	codes.value = allCodes.filter(code => code.includes(searchQuery))
}
</script>

<template>
	<TheContainer>
		<h1>Переводчик валют</h1>
		<ConverterCard />

		<h1>Другие валюты</h1>
		<SearchCard @update:query="onSeach" placeholder="Что будем искать? USD, например?" />
		<PairCard v-for="code of codes" :key="code" :currency-code="code" />
	</TheContainer>

	<!-- Theme Switcher -->
	<ThemeSwitcher />
</template>