<script>
	import Chevron from './icons/Chevron.svelte';
	import Outline from './Outline.svelte';

	export let imageSrc = '';
	export let name = '';
	export let title = '';
	export let subtitle = '';

	let bodyHeight;
	const defaultImage = '/image-not-found.png';

	let expanded = false;

	const toggleExpand = () => (expanded = !expanded);
</script>

<style lang="less">
	.model-container {
		background-color: transparent;
		transition: transform 200ms ease;
		display: inline-flex;
		flex-direction: column;
		align-items: stretch;
		padding: 16px 8px;
		max-width: 200px;
		background-color: white;
		box-shadow: 0px 0px 10px 5px rgba(100, 100, 100, 0.1);

		&:hover {
			transform: scale(1.025);
		}
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
		max-width: calc(11/12 *100%);

		.subtitle {
			font-size: 0.7rem;
		}
	}

	.content {
		margin-top: 24px;
	}

	.italicised {
		font-style: italic;
		font-size: 0.8rem;
		letter-spacing: 0.3px;
		margin-bottom: 8px;
		text-align: center;
	}

	.body {
		text-align: center;
		max-height: 150px;
		overflow: hidden;
		letter-spacing: 0.3px;
		box-sizing: content-box;
		margin: 0 0 8px;
		font-size: 0.9rem;
		transition: max-height 400ms ease;
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
	<img src={imageSrc || defaultImage} alt={name} />
	<h3>{title}</h3>
	<div class="outline-container">
		<Outline><p class="subtitle">{subtitle}</p></Outline>
	</div>
	<div class="content">
		{#if $$slots.italicised}
			<div class="italicised">
				<slot name="italicised" />
			</div>
		{/if}
		<div class="body" class:expanded bind:offsetHeight={bodyHeight}>
			<slot name="body" />
		</div>
	</div>
	{#if !(bodyHeight < 150)}
		<button class="expand-button" on:click={toggleExpand}>
			<Chevron width={8} height={8} direction={expanded ? 'top' : 'bottom'} />
		</button>
	{/if}
	{#if false}<slot></slot>{/if}
</article>
