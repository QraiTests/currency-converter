<script setup>
import { defineProps, defineEmits } from 'vue'
import Card from './TheCard.vue'

// Properties
const props = defineProps({
	placeholder: {
		type: String,
		default: 'Поиск...'
	},
})

// Emits
const emit = defineEmits(['update:query'])

// Event listeners
function onInput(event) {
	emit('update:query', event.target.value)
}
</script>

<template>
	<Card class="card__search">
		<input
			@input="onInput"
			class="card__search-el"
			type="text"
			:placeholder="props.placeholder"
		>
	</Card>
</template>

<style lang="scss" scoped>
.card__search {
	height: min-content;
	max-height: auto;

	padding: 0;

	border-radius: var(--border-radius-sm);

	.card__search-el {
		height: 100%;

		margin: 0;

		background-color: var(--color-1);
	}
}
</style>