<script lang="typescript">
	import HighlightList from './HighlightList.svelte';
	import Outline from './Outline.svelte';

	export let title: string = '';
	export let imageSrc: string = '';
	export let highlightTitle: string = '';
	export let highlightList: ActionItem[] = [];

	const defaultImage = '/image-not-found.png';
</script>

<style lang="less">
	.container {
		display: flex;
		flex-direction: column-reverse;
		width: 100%;
		padding: 16px 40px;
		box-sizing: border-box;
		background-color: var(--theme-colours-white);
		border-radius: 3px;
		box-shadow: var(--theme-boxshadows-1);

		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 32px;
		}

		.highlights-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			letter-spacing: 0.3px;
			margin: 32px 0 0;

			@media (min-width: 786px) {
				width: (7/12 * 100%);
				margin: 0;
			}

			@media (min-width: 1284px) {
				flex-direction: row;
				align-items: center;
				gap: 80px;
			}

			.text-container {
				max-width: 71ch;
			}

			h2 {
				font-family: var(--theme-fonts-header);
				margin: 0;
			}
		}

		img {
			box-shadow: var(--theme-boxshadows-1);
			max-height: 480px;
			object-fit: contain;
			border-radius: 3px;
		}
	}
</style>

<div class="container">
	<div class="highlights-container">
		<div class="text-container">
			<Outline><h2>{title}</h2></Outline>
			<slot name="body" />
		</div>
		<HighlightList title={highlightTitle} highlights={highlightList} />
	</div>
	<img src={imageSrc || defaultImage} alt={`Highlight ${title} - Image`} />
</div>
