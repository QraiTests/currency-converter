<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
$container-size: 768px;

.container {
	width: 100%;
	height: 100%;

	padding: 40px 20px;

	max-width: $container-size;

	display: flex;
	flex-direction: column;
	gap: 15px;

	@media screen and (min-width: 768px) {
		padding: 40px 0;
	}
}
</style>