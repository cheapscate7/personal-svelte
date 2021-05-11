<script context="module">
	import Skills from '../../mocks/skills';

	/**
	 * @param {import('@sveltejs/kit).LoadOptions} options
	 * @returns {import('@sveltejs/kit').Loaded}
	 */
	export async function load({ page, fetch, session, context }) {
		const urls = [
			'https://cheapscate7.github.io/json-repo/personal-svelte/home.json',
			'https://cheapscate7.github.io/json-repo/next-example/jobs.json',
		];
		const pageRes = await fetch(urls[0]);
		const jobRes = await fetch(urls[1]);

		if (jobRes.ok && pageRes.ok) {
			return {
				props: {
					page: await pageRes.json(),
					jobs: await jobRes.json(),
					skills: Skills,
				}
			};
		}

		return {
			status: 404,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import Container from '$components/Container.svelte';
	import Model from '$components/Model.svelte';
	import Outline from '$components/Outline.svelte';
	import Highlight from '$components/Highlight.svelte';

	import { toHTML } from '$utils/html';

	export let page: Page;
	export let jobs: Job[];
	export let skills: any[];
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

<section class="segment">
	<container full>
		<Highlight title={page.overview.title} imageSrc="/IMG_20200923_182129.jpg" highlightTitle="Skills + Stack" highlightList={skills}>
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
		<Outline><h2>Where have I worked?</h2></Outline>
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