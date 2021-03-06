<script lang="typescript">
	import HighlightList from './HighlightList.svelte';
    import Outline from './Outline.svelte';

	export let title: string = '';
	export let imageSrc: string = '';
	export let highlightTitle: string = '';
	export let highlightList: HighlightListItem[] = [];

	const defaultImage = '/image-not-found.png';
</script>

<style lang="less">
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 16px 40px;
		box-sizing: border-box;
		background-color: var(--theme-light-colours-whiteaccent);
		border-radius: 3px;
		box-shadow: var(--theme-light-boxshadows-1);

		.text-container {
			width: (7/12 * 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            h2 {
                font-family: var(--theme-light-fonts-header);
                margin: 0;
            }
		}

		img {
			// width: (5/12 * 100%);
			box-shadow: var(--theme-light-boxshadows-1);
			max-height: 480px;
			object-fit: contain;
            border-radius: 3px;
		}
	}
</style>

<div class="container">
	<div class="text-container">
		<Outline colorType="white"><h2>{title}</h2></Outline>
		<slot name="body" />
		<HighlightList title={highlightTitle} highlights={highlightList} />
	</div>
	<img src={imageSrc || defaultImage} alt={`Highlight ${title} - Image`} />
</div>
