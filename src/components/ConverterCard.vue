<script setup>
import { ref } from 'vue'
import Card from './TheCard.vue'

// Stores
import { useCurrencyStore } from '../stores/currency'
const currencyStore = useCurrencyStore()

// Data
const codes = ref(currencyStore.currenciesCodes) // all currencies as codes
</script>

<template>
	<Card class="card__converter">
		<div class="card-header">
			<div class="field">
				<label>Из какой валюты?</label>
				<select required>
					<option value="" selected disabled>RUB?</option>
					<option v-for="code of codes" :key="code" :value="code">
						{{ code }}
					</option>
				</select>
			</div>
			<div class="field">
				<label>В какую валюту?</label>
				<select required>
					<option value="" selected disabled>EUR?</option>
					<option v-for="code of codes" :key="code" :value="code">
						{{ code }}
					</option>
				</select>
			</div>
		</div>
		<div class="card-body">

		</div>
	</Card>
</template>

<style lang="scss" scoped>
.card__converter {
	height: min-content;
	max-height: none;

	.card-header {
		display: flex;
		flex-direction: row;
		gap: 20px;

		label {
			margin-top: 0;
		}
		.field {
			width: 50%;
		}
	}
}
</style>