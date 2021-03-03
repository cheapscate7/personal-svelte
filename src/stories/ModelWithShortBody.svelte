<script>
    import Model from '../components/Model.svelte';

    export let imageSrc = '';
	export let name = '';
	export let title = '';
	export let subtitle = '';
</script>

<Model {imageSrc} {name} {title} {subtitle}>
    <span slot="italicised">2017-1019</span>
    <span slot="body">Lorem ipsum dolor sit amet</span>
</Model>