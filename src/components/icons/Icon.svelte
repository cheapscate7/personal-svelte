<script>
	export let name = '';
	export let viewBox = '';
	export let width = 13;
	export let height = 13;
	export let fill = '#000000';

	$: svgStyle = `width: ${width}px; height: ${height}px;`;
</script>

<svg
	aria-hidden="true"
	focusable="false"
	data-prefix="fas"
	data-icon={name}
	class="svg-inline--fa fa-chevron-right fa-w-10"
	style={svgStyle}
	role="img"
	xmlns="http://www.w3.org/2000/svg"
	{viewBox}
	{fill}
>
	<slot />
</svg>
