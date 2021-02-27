<script>
	import { createEventDispatcher } from 'svelte';

	export let label = '';
	export let type = 'primary';
	export let text = false;
	export let disabled = false;

	const dispatch = createEventDispatcher();

	const onClick = () => !disabled && dispatch('click');
</script>

<style>
	button {
		position: relative;
		display: inline-flex;
		border-radius: 3px;
		overflow: hidden;
		cursor: pointer;
		padding: 8px 16px;
		font-size: 1rem;
		font-weight: bold;
		transition: background-color, color 200ms ease;
		border: 1px solid transparent;
		outline: none;
	}
	.disabled {
		cursor: not-allowed;
	}
	.primary {
		background-color: var(--theme-light-colours-bold);
		color: white;
	}
	.primary:hover {
		background-color: transparent;
		color: var(--theme-light-colours-bold);
		border: 1px solid var(--theme-light-colours-bold);
	}
	.primary:focus {
		border: 1px solid var(--theme-light-colours-boldaccent);
	}
	.secondary {
		background-color: var(--theme-light-colours-alternate);
		color: var(--theme-light-colours-white);
	}
	.secondary:hover {
		background-color: transparent;
		color: var(--theme-light-colours-alternate);
		border: 1px solid var(--theme-light-colours-alternate);
	}
	.secondary:focus {
		border: 1px solid var(--theme-light-colours-whiteaccent);
	}
	.text {
		font-weight: 400;
		padding: 0;
		background-color: transparent;
		border: 0;
	}
	.text:hover {
		border: 0;
		text-decoration: underline;
	}

	.primary.text {
		color: var(--theme-light-colours-bold);
	}
	.primary.text:focus {
		border: 0;
		font-weight: 700;
	}

	.secondary.text {
		color: var(--theme-light-colours-alternate);
	}
	.secondary.text:focus {
		border: 0;
		font-weight: 700;
	}
</style>

<button
	class:primary={type === 'primary'}
	class:secondary={type === 'secondary'}
	class:text
	class:disabled
	on:click={onClick}
>
	{label}
</button>
