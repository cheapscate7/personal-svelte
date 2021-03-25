<script>
	export let full = false;
	export let bold = false;
</script>

<style>
	:global(h1, h2) {
		font-size: 2rem;
		font-weight: bold;
		margin: 0 0 16px;
		letter-spacing: 0.5px;
		color: var(--theme-colours-boldtext);
		display: inline-block;
		text-transform: uppercase;
		font-family: var(--theme-fonts-header);
	}
	:global(p) {
		font-size: 1rem;
		background-color: white;
		padding: 8px 24px 24px 8px;
	}
	:global(p + p) {
		margin: 8px 0 0;
	}
	.paragraph-container {
		padding: 16px;
	}
	.full {
		padding: 0;
	}
	.bold {
		background-color: var(--theme-colours-primary-background);
		color: var(--theme-colours-primary-text);
	}
</style>

<div class="paragraph-container" class:full class:bold>
	<slot>content not provided to Paragraph.svelte</slot>
</div>
