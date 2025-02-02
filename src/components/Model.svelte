<script lang="typescript">
	import Chevron from './icons/Chevron.svelte';
	import Outline from './Outline.svelte';

	export let imageSrc = '';
	export let name = '';
	export let title = '';
	export let subtitle = '';
	export let text3: string[] = [];

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
		align-items: center;
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
		color: black;
		margin: 16px auto 8px;
		font-family: var(--theme-fonts-header);
	}

	p {
		margin: 0;
	}

	.subtitle {
			font-size: 0.7rem;
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
		width: 100%;
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
		background-color: var(--theme-colours-white);
		color: var(--theme-colours-black);

		&:focus {
			border: 1px solid var(--theme-colours-black);
		}

		&:hover {
			background-color: var(--theme-colours-primary-background);
			color: var(--theme-colours-primary-text);
		}
	}
</style>

<article class="model-container">
	<img src={imageSrc || defaultImage} alt={name} />
	<h3>{title}</h3>
	<Outline><p class="subtitle">{subtitle}</p></Outline>
	<div class="content">
		{#if $$slots.italicised}
			<div class="italicised">
				<slot name="italicised" />
			</div>
		{/if}
		<div class="body" class:expanded bind:offsetHeight={bodyHeight}>
			<slot name="body" />
			{#if text3 && text3.length > 0}
				<div class="italicised">
					<span>Worked with: </span>
					{#each text3 as worked_with}
						<span>{worked_with} </span>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	{#if !(bodyHeight < 150)}
		<button class="expand-button" on:click={toggleExpand} aria-label="expand model button">
			<Chevron width={8} height={8} direction={expanded ? 'top' : 'bottom'} />
		</button>
	{/if}
	{#if false}<slot></slot>{/if}
</article>
