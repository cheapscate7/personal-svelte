<script>
	import { ThemeWrapper } from 'svelte-themer';
	import Themes from '../theme.js';
	import socialLinks from '../../mocks/socialLinks.js';

	import Header from './Header.svelte';
	import Container from './Container.svelte';
	import Footer from './Footer.svelte';
	import Loading from './icons/Loading.svelte';

	export let title = '';
	export let loading = true;
</script>

<style lang="less">
	nav {
		padding: 40px 0 32px;
	}
	.loading {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	main {
		margin: 40px 0;
	}
</style>

<svelte:head>
	<title>{title} | Ramona Harrison - Frontend Web developer</title>
</svelte:head>

<ThemeWrapper themes={Themes}>
	{#if loading}
		<div class="loading"><Loading /></div>
	{:else}
		<nav>
			<Container>
				<Header title="Ramona Harrison" outline="Home" underline="Developer / Frontend" />
			</Container>
		</nav>
		<main>
			<slot />
		</main>
		<footer>
			<Footer {socialLinks} />
		</footer>
	{/if}
</ThemeWrapper>
