<script>
	import Chevron from './icons/Chevron.svelte';
	import Outline from './Outline.svelte';

	export let imageSrc = '';
	export let name = '';
	export let title = '';
	export let subtitle = '';
	export let body = '';

	let bodyHeight;

	let expanded = false;

	const toggleExpand = () => (expanded = !expanded);
</script>

<style>
	.model-container {
		background-color: transparent;
		transition: background-color 200ms ease;
		display: inline-flex;
		flex-direction: column;
		align-items: stretch;
		padding: 16px 8px;
		max-width: 200px;
		background-color: white;
		box-shadow: 0px 0px 10px 5px rgba(100, 100, 100, 0.1);
	}

	img {
		width: calc(8 / 12 * 100%);
		object-fit: cover;
		margin: auto;
	}

	h3 {
		font-size: 1.2rem;
		letter-spacing: 0.75px;
		font-weight: 700;
		color: var(--theme-light-colours-boldtext);
		margin: 16px auto 8px;
		font-family: var(--theme-light-fonts-header);
	}

	p {
		margin: 0;
	}

	.outline-container {
		margin: auto;
	}

	.body {
		text-align: center;
		max-height: 150px;
		overflow: hidden;
		letter-spacing: 0.3px;
		box-sizing: content-box;
		margin: 24px 0 8px;
		font-size: 0.9rem;
	}

	.body.expanded {
		max-height: initial;
	}

	.expand-button {
		border: 0;
		padding: 8px;
		cursor: pointer;
		transition: all 200ms ease;
		font-size: 0.8rem;
		letter-spacing: 0.8px;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid transparent;
		color: var(--theme-light-colours-boldtext);
	}

	.expand-button:focus {
		border: 1px solid var(--theme-light-colours-bold);
	}

	.expand-button:hover {
		background-color: var(--theme-light-colours-alternate);
		color: white;
	}
</style>

<article class="model-container">
	<img src={imageSrc} alt={name} />
	<h3>{title}</h3>
	<div class="outline-container">
		<Outline><p>{subtitle}</p></Outline>
	</div>
	<p class="body" class:expanded bind:offsetHeight={bodyHeight}>
		{body}
	</p>
	{#if !(bodyHeight < 150)}
		<button class="expand-button" on:click={toggleExpand}>
			<Chevron width={8} height={8} direction={expanded ? 'top' : 'bottom'} />
		</button>
	{/if}
</article>
