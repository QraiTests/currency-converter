<script setup>
import { ref, computed } from 'vue'
import Card from './TheCard.vue'

// Stores
import { useCurrencyStore } from '../stores/currency'
const currencyStore = useCurrencyStore()

// Data
const codes = ref(currencyStore.currenciesCodes) // all currencies as codes
const baseCurrencyCode = ref(null)
const baseCurrencyTo = ref(null)
const baseCurrencyFrom = computed(() => (1 / baseCurrencyTo.value).toFixed(4))

// Event listeners
function onBaseCurrencyChange(event) {
	baseCurrencyCode.value = event.target.value
	baseCurrencyTo.value = currencyStore.valueOfCurrency(baseCurrencyCode.value)?.now ?? null
}
</script>

<template>
	<Card class="card__converter">
		<div class="field">
			<label>Основная валюта</label>
			<select required @input="onBaseCurrencyChange">
				<option value="" selected disabled>Например, USD</option>
				<option v-for="code of codes" :key="code" :value="code">
					{{ code }}
				</option>
			</select>
		</div>
		<div v-if="baseCurrencyTo" class="card-body">
			<p>
				1 {{ baseCurrencyCode }} = {{ baseCurrencyTo }} RUB
			</p>
			<p>
				1 RUB = {{ baseCurrencyFrom }} {{ baseCurrencyCode }}
			</p>
		</div>
	</Card>
</template>

<style lang="scss" scoped>
.card__converter {
	height: min-content;
	max-height: none;

	.field {
		label {
			margin-top: 0;
		}
		select {
			margin-top: 10px;
			padding: 12px;

			background-color: var(--color-1);
		}
	}

	.card-body {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		padding-top: 30px;

		font-size: var(--text-3);
	}
}
</style>