<script>
	import { ThemeWrapper } from 'svelte-themer';
	import Themes from '../theme.js';
	// the component used in the story.
	export let child;
	// the props inherited from the component's story
	export let props = {};
</script>

<ThemeWrapper themes={Themes}>
	<svelte:component this={child} {...props} />
</ThemeWrapper>
