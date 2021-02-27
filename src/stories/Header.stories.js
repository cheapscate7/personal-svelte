import Header from '../components/Header.svelte';

export default {
	title: 'Header',
	component: Header,
};

const Template = args => ({
	Component: Header,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	title: 'Ramona Harrison',
	outline: 'Home',
};

export const withUnderline = Template.bind({});
Default.args = {
	title: 'Ramona Harrison',
	outline: 'Home',
	underline: 'Developer',
};
