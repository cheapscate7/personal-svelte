<script lang="ts">
	export let title: string = '';
	export let socialLinks: LinkItem[] = [];
</script>

<style lang="less">
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		a {
			cursor: pointer;
			display: flex;
			text-decoration: none;
			color: var(--theme-colours-black);
		}

		.circle {
			content: '';
			width: 16px;
			height: 16px;
			border: 1px solid var(--theme-colours-black);
			border-radius: 50%;
			transition: background-color 400ms ease, border-color 400ms ease;
		}

		span {
			margin-left: 16px;
			letter-spacing: 0;
			font-size: .9rem;
		}

		&:hover {
			.circle {
				background-color: var(--theme-colours-primary-background);
			}
		}

		&:nth-last-of-type(2n) {
			&:hover {
				.circle {
					background-color: var(--theme-colours-secondary-background);
				}
			}
		}

		& + & {
			margin-top: 8px;
		}
	}
</style>

<h3>{title}</h3>
<ul>
	{#each socialLinks as link}
		<li>
			<a href={link.link}
				><div class="circle" />
				<span>{link.label}</span></a
			>
		</li>
	{/each}
</ul>
