<script lang="typescript">
	import Check from './icons/Check.svelte';
	import Outline from './Outline.svelte';

	export let highlights: ActionItem[] = [];
	export let title: string = '';
	export let color: string = 'black';
</script>

<style lang="less">
	h3 {
		font-size: 1.1rem;
		max-width: 320px;
		font-family: var(--theme-light-fonts-header);
		margin: 0;
	}

	ul {
		list-style-type: none;
		margin: 16px 0 0;
		padding: 0;
	}

	li {
		display: flex;
		align-items: center;
		max-width: 71ch;
		transition: all 200ms ease;

		.icon-container {
			background-color: white;
			padding: 8px;
			display: inline-flex;
		}

		.label {
			display: inline-flex;
			padding: 0 8px;
			line-height: 24px;
			margin: 0;
			background-color: var(--theme-light-colours-bold);
			color: white;
			transition: padding-left 200ms ease;
		}

		& + & {
			margin-top: 8px;
		}

		&:hover {
			.label {
				padding-left: 10px;
			}
		}
		
	}
</style>

<div>
	<Outline colorType="white"><h3>{title}</h3></Outline>

	<ul>
		{#each highlights as highlight}
			<li>
				<div class="icon-container"><Check width={8} height={8} fill="#f87666" /></div>
				<p class="label">{highlight.label}</p>
			</li>
		{/each}
	</ul>
</div>
