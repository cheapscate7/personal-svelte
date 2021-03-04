<script>
	import { ThemeWrapper } from 'svelte-themer';
	import Themes from '../theme.js';

	import Header from './Header.svelte';
	import Container from './Container.svelte';

	export let title = '';
	export let loading = true;
</script>

<style lang="less">
	nav {
		padding: 40px 0 32px;
	}
	main {
		margin: 40px 0;
	}
</style>

<svelte:head>
	<title>{title} Ramona Harrison - Frontend Webdeveloper</title>
</svelte:head>

<ThemeWrapper themes={Themes}>
	{#if loading}
		<p>loading...</p>
	{:else}
		<nav>
			<Container>
				<Header title="Ramona Harrison" outline="Home" underline="Developer" />
			</Container>
		</nav>
		<main>
			<slot />
		</main>
	{/if}
</ThemeWrapper>
