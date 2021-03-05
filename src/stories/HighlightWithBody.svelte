<script lang="typescript">
    import HighlightWithBody from '../components/Highlight.svelte';
    export let title: string = "";
    export let imageSrc: string = "";
</script>

<HighlightWithBody {title} {imageSrc}>
    <p slot="body">This is an example of some text. This is what text will look like in the Highlight component. do not be fooled, it will never look different from this </p>
</HighlightWithBody>