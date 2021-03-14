<script lang="ts" context="module">
	export type ColorType = 'red' | 'white' | 'green';
</script>

<script lang="ts">
	export let colorType: ColorType = 'red';
	export let small: boolean = false;
</script>

<style lang="less">
	.outline-container {
		display: inline-flex;
		width: max-content;
		height: max-content;
		font-weight: 700;
		font-size: 0.7rem;
		padding: 8px 16px;
		vertical-align: baseline;
		box-sizing: border-box;
		letter-spacing: 1px;
		font-family: var(--theme-light-fonts-header);
		max-width: 100%;

		&.red {
			background-color: var(--theme-light-colours-bold);
			color: white;
		}

		&.white {
			background-color: white;
			color: var(--theme-light-colours-bold);
		}

		&.green {
			background-color: var(--theme-light-colours-alternate);
			color: white;
		}

		&.small {
			padding: 8px;
		}
	}
</style>

<div class="outline-container" class:red={colorType === 'red'} class:white={colorType === 'white'} class:green={colorType === 'green'} class:small>
	<slot />
</div>
