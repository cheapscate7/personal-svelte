<script lang="ts">
	// import Header from './Header.svelte';

	export let title: string = '';
	export let loading: boolean = true;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if loading}
	<p>loading...</p>
{:else}
	<nav />
	<main>
		<slot />
	</main>
{/if}
