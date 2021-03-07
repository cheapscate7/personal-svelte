import HighlightWithBody from './HighlightWithBody.svelte';
import MockImage from '../../public/IMG_20200923_182129.jpg';

export default {
	title: 'Highlight',
	component: HighlightWithBody,
};

const Template = args => ({
	Component: HighlightWithBody,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	title: 'Who am I?',
	imageSrc: MockImage,
	highlightList: [
		{ label: 'Smart' },
		{ label: 'Witty' },
		{
			label:
				'Talented if i were to go on for a long time, this would get really long. lets see what happens to the list item if i do that. wow this is going on for a long time',
		},
	],
	highlightTitle: 'Why am I so cool?',
};
