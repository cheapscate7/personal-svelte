<script lang="ts">
	import { onMount } from 'svelte';
	import marked from 'marked';
	import DOMPurify from 'dompurify';

	import Layout from './components/Layout.svelte';
	import Container from './components/Container.svelte';
	import Model from './components/Model.svelte';

	let page: Page;
	let jobs: Job[];

	onMount(async () => {
		const urls = [
			'https://cheapscate7.github.io/json-repo/personal-svelte/home.json',
			'https://cheapscate7.github.io/json-repo/next-example/jobs.json',
		];
		page = await fetch(urls[0]).then(resp => resp.json());
		jobs = await fetch(urls[1]).then(resp => resp.json());
	});

	const toHTML = (markdown: string) => DOMPurify.sanitize(marked(markdown));
</script>

<style lang="less">
	.segment + .segment {
		margin: 80px 0 0;
	}

	.jobs-grid {
		display: grid;
		grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
		column-gap: 8px;
		row-gap: 16px;
		justify-items: center;
		align-items:baseline;

		@media (min-width: 768px) {
			column-gap: 24px;
		}
	}
</style>

<Layout title="🏡" loading={!page || !jobs}>
	<section class="segment">
		{#each page.segments as segment}
			<Container>
				<h2>{segment.title}</h2>
				{#each segment.blob as paragraph}
					{@html toHTML(paragraph)}
				{/each}
			</Container>
		{/each}
	</section>

	<section class="segment">
		<Container full>
			<div class="jobs-grid">
				{#each jobs as job}
					<Model name={job.company_name} subtitle={job.position}>
						<span slot="italicised">{job.duration[0]} - {job.duration[1] || 'present'}</span>
						<span slot="body">{job.description}</span>
					</Model>
				{/each}
			</div>
		</Container>
	</section>
</Layout>
