<script lang="typescript">
	import Check from './icons/Check.svelte';

	export let highlights: HighlightListItem[] = [];
	export let title: string = '';
	export let color: string = 'black';
</script>

<style lang="less">
	h3 {
		font-family: var(--theme-light-fonts-header);
		font-size: 1.1rem;
		text-decoration: underline;
        max-width: 320px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		font-family: var(--theme-light-fonts-header);
	}

    li {
			display: flex;
			align-items: center;
			max-width: 320px;
			transition: all 200ms ease;

			&:hover {
				max-width: 322px;
			}

            
			& + & {
				margin-top: 8px;
			}

			&:hover {
				span {
					margin-left: 10px;
				}
			}

			.icon-container {
				flex-shrink: 1;
			}

			span {
				line-height: 16px;
				margin-left: 8px;
				letter-spacing: 0.3px;
				transition: margin 200ms ease;
				font-weight: bold;
			}
		}
</style>

<h3>{title}</h3>

<ul>
	{#each highlights as highlight}
		<li>
			<div class="icon-container"><Check width={16} height={16} fill={color} /></div>
			<span style={`color: ${color};`}>{highlight.label}</span>
		</li>
	{/each}
</ul>
