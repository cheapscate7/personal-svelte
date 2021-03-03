<script>
    import Model from '../components/Model.svelte';

    export let imageSrc = '';
	export let name = '';
	export let title = '';
	export let subtitle = '';
</script>

<Model {imageSrc} {name} {title} {subtitle}>
    <span slot="italicised">2017-1019</span>
    <span slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna turpis, dictum ut tempus eget, sollicitudin ac erat. Sed ut pellentesque neque. Proin at erat vel tortor imperdiet finibus ut vitae dui. Suspendisse tristique nisl ut odio ultrices, iaculis venenatis nisi congue. Nam bibendum vitae sem eu porta. Aenean vehicula mauris quis eros condimentum, at iaculis orci dictum. Fusce efficitur quam nisl, nec varius ante placerat quis. Donec venenatis, orci quis faucibus rhoncus, leo nisi venenatis nunc, sed posuere urna libero vitae tellus. Duis tortor metus, accumsan ullamcorper scelerisque ut, efficitur nec mauris. Nunc dapibus massa id pulvinar finibus. Praesent justo ligula, tincidunt a mauris ut, porttitor commodo turpis.</span>
</Model>
<Model {imageSrc} {name} {title} {subtitle}>
    <span slot="italicised">2017-1019</span>
    <span slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna turpis, dictum ut tempus eget, sollicitudin ac erat. Sed ut pellentesque neque. Proin at erat vel tortor imperdiet finibus ut vitae dui. Suspendisse tristique nisl ut odio ultrices, iaculis venenatis nisi congue. Nam bibendum vitae sem eu porta. Aenean vehicula mauris quis eros condimentum, at iaculis orci dictum. Fusce efficitur quam nisl, nec varius ante placerat quis. Donec venenatis, orci quis faucibus rhoncus, leo nisi venenatis nunc, sed posuere urna libero vitae tellus. Duis tortor metus, accumsan ullamcorper scelerisque ut, efficitur nec mauris. Nunc dapibus massa id pulvinar finibus. Praesent justo ligula, tincidunt a mauris ut, porttitor commodo turpis.</span>
</Model>