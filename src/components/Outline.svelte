<script lang="ts" context="module">
	export type ColorType = 'primary' | 'secondary';
</script>

<script lang="ts">
	export let colorType: ColorType = 'primary';
	export let inverse: boolean = false;
</script>

<style lang="less">
	.outline-container {
		display: inline-flex;
		font-weight: 700;
		font-size: 0.7rem;
		padding: 8px 16px;
		box-sizing: border-box;
		letter-spacing: 1px;
		font-family: var(--theme-fonts-header);
		max-width: 100%;
		// text-align: center;

		&.primary {
			background-color: var(--theme-colours-primary-background);
			color: var(--theme-colours-primary-text);
		}

		&.secondary {
			background-color: var(--theme-colours-secondary-background);
			color: var(--theme-colours-secondary-text);
		}

		&.inverse {
			&.primary {
				background-color: var(--theme-colours-primary-text);
				color: var(--theme-colours-primary-background);
			}

			&.secondary {
				background-color: var(--theme-colours-secondary-text);
				color: var(--theme-colours-secondary-background);
			}
		}
	}
</style>

<div class="outline-container" class:primary={colorType === 'primary'} class:secondary={colorType === 'secondary'} class:inverse>
	<slot />
</div>
