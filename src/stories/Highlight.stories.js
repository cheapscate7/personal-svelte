import HighlightWithBody from './HighlightWithBody.svelte';

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
    imageSrc: "/public/IMG_20200923_182129.jpg"
};
