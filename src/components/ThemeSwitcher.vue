<script setup>
function onSwitch() {
	let currentTheme = document.body.getAttribute('data-theme')
	document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark')
}
</script>
<template>
	<button @click.prevent="onSwitch" class="theme-switcher">
		<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_1951_491)">
				<path d="M12.1797 17.8633C14.9411 17.8633 17.1797 15.6247 17.1797 12.8633C17.1797 10.1019 14.9411 7.86328 12.1797 7.86328C9.41826 7.86328 7.17969 10.1019 7.17969 12.8633C7.17969 15.6247 9.41826 17.8633 12.1797 17.8633Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12.1797 1.86328V3.86328" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12.1797 21.8633V23.8633" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M4.39941 5.08398L5.81941 6.50398" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M18.54 19.2227L19.96 20.6427" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M1.17969 12.8633H3.17969" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M21.1797 12.8633H23.1797" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M4.39941 20.6427L5.81941 19.2227" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M18.54 6.50398L19.96 5.08398" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</g>
			<defs>
				<clipPath id="clip0_1951_491">
					<rect width="24" height="24" fill="white" transform="translate(0.179688 0.863281)"/>
				</clipPath>
			</defs>
		</svg>
	</button>
</template>
<style lang="scss" scoped>
.theme-switcher {
	width: 75px;
	height: 75px;

	position: fixed;
	top: 25px;
	right: 25px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	outline: none;
	border: none;
	border-radius: var(--border-radius-md);

	background-color: var(--color-2);

	transition: var(--transition);
	transition-property: background;

	&:hover {
		background-color: var(--color-3);
	}
}
</style>