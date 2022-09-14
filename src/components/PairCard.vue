<script setup>
import { defineProps, reactive } from 'vue'
import Card from './TheCard.vue'

// Stores
import { useCurrencyStore } from '../stores/currency'
const currencyStore = useCurrencyStore()

// Properties
const props = defineProps({
	currencyCode: {
		type: String,
		required: true
	},
})

// Data
const currency = reactive(currencyStore.valueOfCurrency(props.currencyCode))
</script>

<template>
	<Card class="card__currency-pair">
		<p class="card-title">
			<span>{{ props.currencyCode }}</span> ({{ currency.name }})
		</p>
		<p class="card-text">
			{{ currency.now }} RUB
		</p>
	</Card>
</template>

<style lang="scss" scoped>
.card__currency-pair {
	height: min-content;
	max-height: none;

	gap: 20px;

	span {
		color: var(--color-accent);
	}
}
</style>