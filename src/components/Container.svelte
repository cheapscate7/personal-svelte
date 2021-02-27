<script>
	export let full = false;
</script>

<style>
	.container {
		padding: 0 16px;
		max-width: 1440px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 768px) {
		.container {
			padding: 0 116px;
		}
		.full {
			padding: 0;
		}
	}
</style>

<div class="container" class:full><slot /></div>
