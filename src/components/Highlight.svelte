<script lang="typescript">
    export let title: string = "";
    export let imageSrc: string = "";

    const defaultImage = '/image-not-found.png';
</script>

<div class="container">
    <div class="text-container">
        <h2>{title}</h2>
        <slot name="body" />
    </div>
    <div class="media-container">
        <img src={imageSrc || defaultImage} alt={`Highlight ${title} - Image`} />
    </div>
</div>