<script>
	import Icon from './Icon.svelte';

	export let width = 13;
	export let height = 13;
	export let fill = '#000000';
	export let direction = 'bottom';
</script>

<style>
	path {
		transition: transform 100ms ease;
	}
	.bottom {
		transform: rotate(90deg);
	}
	.top {
		transform: rotate(270deg);
	}
	.left {
		transform: rotate(180deg);
	}
	.right {
		transform: rotate(0deg);
	}
</style>

<div
	class:left={direction === 'left'}
	class:right={direction === 'right'}
	class:top={direction === 'top'}
	class:bottom={direction === 'bottom'}
>
	<Icon name="chevron" {width} {height} viewBox="0 0 320 512" {fill}>
		<path
			fill="currentColor"
			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
		/>
	</Icon>
</div>
