<script>
	import Outline from './Outline.svelte';

	export let title = '';
	export let outline = '';
	export let underline = '';
</script>

<style lang="less">
	h1 {
		color: var(--theme-light-colours-boldtext);
		margin: 16px 0 8px;
		font-size: 2.5rem;
		font-family: var(--theme-light-fonts-title);
		letter-spacing: 1.5px;

		&.noOutline {
			margin-top: 0;
		}

		&.noUnderline {
			margin-bottom: 0;
		}
	}
	h2 {
		font-size: 1.25rem;
		color: var(--theme-light-colours-alternate);
		font-family: var(--theme-light-fonts-header);
		text-decoration: underline;
		margin: 0;
		line-height: 1.5;
	}
</style>

{#if outline}
	<Outline>{outline}</Outline>
{/if}
<h1 class:noOutline={!outline} class:noUnderline={!underline}>{title}</h1>
{#if underline}
	<h2>{underline}</h2>
{/if}
