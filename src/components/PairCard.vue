<script setup>
import { defineProps, reactive, computed } from 'vue'
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
const currencyFromRub = computed(() => (currency.now).toFixed(3))
const currencyToRub = computed(() => (1 / currency.now).toFixed(3))
const currencyChange = computed(() => currency.now >= currency.prev ? 'up' : 'down')
</script>

<template>
	<Card class="card__currency-pair">
		<p class="card-title">
			<span class="currency-change" :data-change="currencyChange"></span>
			<span class="currency-code">
				{{ props.currencyCode }}
			</span>
			({{ currency.name }})
		</p>
		<div class="card-body">
			<p class="card-text">
				1 {{ props.currencyCode }} = {{ currencyFromRub }} RUB
			</p>
			<p class="card-text">
				1 RUB = {{ currencyToRub }} {{ props.currencyCode }}
			</p>
		</div>
	</Card>
</template>

<style lang="scss" scoped>
.card__currency-pair {
	height: min-content;
	max-height: none;

	gap: 20px;

	.currency-change {
		margin-right: 5px;

		&[data-change="up"]::before {
			content: '▲';
			color: #52cb52;
		}
		&[data-change="down"]::before {
			content: '▼';
			color: #d34e4c;
		}
	}
	
	.card-body {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>