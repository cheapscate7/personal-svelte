<script>
	import Outline from './Outline.svelte';

	export let title = '';
	export let outline = '';
	export let underline = '';
</script>

<style lang="less">
	span  {
		margin: 0 8px;
	}

	h1 {
		margin: 24px 0 8px;
		font-size: 3.5rem;
		letter-spacing: -1.5px;
    	line-height: 0.9;
		color: var(--theme-colours-primary-background);

		&.noOutline {
			margin-top: 0;
		}

		&.noUnderline {
			margin-bottom: 0;
		}
	}
	h2 {
		font-size: 1.15rem;
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
