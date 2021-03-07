import Footer from '../components/Footer.svelte';

export default {
	title: 'Footer',
	component: Footer,
};

const Template = args => ({
	Component: Footer,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	socialLinks: [
		{ label: 'Lin', link: '#' },
		{ label: 'Git', link: '#' },
	],
};
