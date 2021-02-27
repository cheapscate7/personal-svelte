<script>
	import Outline from './Outline.svelte';

	export let title = '';
	export let outline = '';
	export let underline = '';
</script>

<style lang="less">
	.container {
		display: inline-block;
	}
	h1 {
		color: var(--theme-light-colours-boldtext);
		margin: 16px 0 8px;
		font-size: 2.5rem;
		font-family: var(--theme-light-fonts-title);
		letter-spacing: 1.5px;
	}
	h2 {
		font-size: 1.25rem;
		color: var(--theme-light-colours-alternate);
		margin: 8px 0 0;
		text-decoration: underline;
		line-height: 1.5;
	}
	.underline {
		padding: 1px;
		width: 100%;
		background-color: var(--theme-light-colours-boldtext);
		height: 1px;
		margin: 16px 0;
	}
</style>

<div class="container">
	<Outline>{outline}</Outline>
	<h1>{title}</h1>
	<div class="underline" />
	{#if underline}
		<h2>{underline}</h2>
	{/if}
</div>
