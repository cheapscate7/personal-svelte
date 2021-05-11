<script>
	import ThemeWrapper from 'svelte-themer/components/ThemeWrapper.svelte'
	import Themes from '../theme.js';
	import socialLinks from '../../mocks/socialLinks.js';

	import Header from '$components/Header.svelte';
	import Container from '$components/Container.svelte';
	import Footer from '$components/Footer.svelte';

	let title = '🏡';
</script>

<style lang="less">
	:global(html) {
		background-color: var(--theme-colors-background, initial);
		color: var(--theme-colors-text, initial);
	}
	nav {
		padding: 40px 0 32px;
	}

	main {
		margin: 40px 0;
	}
</style>

<svelte:head>
	<title>{title} | Ramona Harrison - Frontend Web developer</title>
	<meta name="description" content="Ramona Harrison, Frontend web developer. Based in Utrecht, Netherlands. Works with React, Svelte, and GraphQL. Home" />
	<meta name="theme-color" content="#E23C12"/>
	<link rel="apple-touch-icon" href="/icon-144.png">
</svelte:head>

<ThemeWrapper themes={Themes}>
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
</ThemeWrapper>