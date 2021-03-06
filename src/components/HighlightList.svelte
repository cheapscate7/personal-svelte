<script lang="typescript">
	import Check from './icons/Check.svelte';
	import Outline from './Outline.svelte'

	export let highlights: HighlightListItem[] = [];
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
					margin-left: 24px;
				}
			}

			.icon-container {
				flex-shrink: 1;
			}

			span {
				line-height: 16px;
				margin-left: 16px;
				letter-spacing: 0.3px;
				transition: margin 200ms ease;
			}
		}
</style>

<Outline colorType="white"><h3>{title}</h3></Outline>

<ul>
	{#each highlights as highlight}
		<li>
			<div class="icon-container"><Check width={16} height={16} fill={color} /></div>
			<span style={`color: ${color};`}>{highlight.label}</span>
		</li>
	{/each}
</ul>
