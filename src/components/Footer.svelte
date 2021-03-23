<script lang="ts">
	import Social from './Social.svelte';
    import Outline from './Outline.svelte';

	export let socialLinks: LinkItem[] = [];
</script>

<style lang="less">
	.container {
		background-color: var(--theme-colours-white);
		padding: 40px 24px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		h4 {
			letter-spacing: 0.3px;
			font-weight: 400;
            font-size: 1rem;
		}

        .social-container {
            margin: 16px 16px 16px 0;
        }

		p {
			color: lighten(#313638, 30%);
			font-size: 0.6rem;
		}
	}
</style>

<div class="container">
	<Outline><h4>Find Me:</h4></Outline>
	<div class="social-container"><Social {socialLinks} /></div>
	<p>Created by Ramona Harrison</p>
</div>
