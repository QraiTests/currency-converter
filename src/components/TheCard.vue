<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.card::v-deep {
	width: 100%;
	height: 100%;
	max-height: 300px;

	padding: 20px 30px;

	display: flex;
	flex-direction: column;

	background-color: var(--color-2);

	border-radius: var(--border-radius-md);

	.card-title {
		font-size: var(--text-2);
		color: var(--color-text);
	}
	.card-text {
		font-size: var(--text-3);
		color: var(--color-muted);
	}

	@media screen and (min-width: 768px) {
		padding: 30px 40px;
	}
}
</style>