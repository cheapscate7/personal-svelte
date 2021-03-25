<script>
	import Outline from './Outline.svelte';

	export let title = '';
	export let outline = '';
	export let underline = '';
</script>

<style lang="less">
	span  {
		font-size: 1rem;
	}

	h1 {
		margin: 16px 0 8px;
		font-size: 3.5rem;
		font-family: var(--theme-fonts-title);
		letter-spacing: 1.5px;
		color: var(--theme-colours-primary-background);

		&.noOutline {
			margin-top: 0;
		}

		&.noUnderline {
			margin-bottom: 0;
		}
	}
	h2 {
		font-size: 1.25rem;
		font-family: var(--theme-fonts-header);
		text-decoration: underline;
		margin: 0;
		line-height: 1.5;
	}
</style>

{#if outline}
	<Outline><span>{outline}</span></Outline>
{/if}
<h1 class:noOutline={!outline} class:noUnderline={!underline}>{title}</h1>
{#if underline}
	<h2>{underline}</h2>
{/if}
