import Social from '../components/Social.svelte';

export default {
	title: 'Social',
	component: Social,
};

const Template = args => ({
	Component: Social,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	socialLinks: [
		{ label: 'Lin', link: '#' },
		{ label: 'Git', link: '#' },
	],
};
