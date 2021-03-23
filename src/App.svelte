<script lang="ts">
	import { onMount } from 'svelte';
	import marked from 'marked';
	import DOMPurify from 'dompurify';

	import Layout from './components/Layout.svelte';
	import Container from './components/Container.svelte';
	import Model from './components/Model.svelte';
	import Outline from './components/Outline.svelte';
	import Highlight from './components/Highlight.svelte';

	import Skills from '../mocks/skills';

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
		margin: 40px 0 0;

		@media (min-width: 768px ) {
			margin: 80px 0 0;
		}
	}

	.jobs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		column-gap: 8px;
		row-gap: 16px;
		justify-items: center;
		align-items: flex-start;
		transition: all 200ms ease;
		margin: 32px 0 0;

		@media (min-width: 768px) {
			column-gap: 24px;
		}
	}
</style>

<Layout title="🏡" loading={!page || !jobs}>
	<section class="segment">
		<container full>
			<Highlight title={page.overview.title} imageSrc="/IMG_20200923_182129.jpg" highlightTitle="Skills + Stack" highlightList={Skills}>
				<div slot="body">
					{#each page.overview.blob as paragraph}
						{@html toHTML(paragraph)}
					{/each}
				</div>
			</Highlight>
		</container>
	</section>
	<section class="segment">
		{#each page.segments as segment}
			<Container>
				<div class="rich-text">
					<Outline><h2>{segment.title}</h2></Outline>
					{#each segment.blob as paragraph}
						{@html toHTML(paragraph)}
					{/each}
				</div>
			</Container>
		{/each}
	</section>

	<section class="segment">
		<Container full>
			<Outline colorType="secondary"><h2>Where have I worked?</h2></Outline>
			<div class="jobs-grid">
				{#each jobs as job}
					<Model name={job.company_name} subtitle={job.position} imageSrc={job.image_src} text3={job.worked_with}>
						<span slot="italicised">{job.duration[0]} - {job.duration[1] || 'present'}</span>
						<span slot="body">{@html toHTML(job.description)}</span>
					</Model>
				{/each}
			</div>
		</Container>
	</section>
</Layout>
