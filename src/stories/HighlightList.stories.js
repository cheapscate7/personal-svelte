import HighlightList from '../components/HighlightList.svelte';

export default {
	title: 'HighlightList',
	component: HighlightList,
};

const Template = args => ({
	Component: HighlightList,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	highlights: [
		{ label: 'Smart' },
		{ label: 'Witty' },
		{
			label:
				'Talented if i were to go on for a long time, this would get really long. lets see what happens to the list item if i do that. wow this is going on for a long time',
		},
	],
	title: 'Why I am so cool',
};
