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
};

export const withUnderline = Template.bind({});
withUnderline.args = {
	title: 'Ramona Harrison',
	underline: 'Developer',
};

export const withOutline = Template.bind({});
withOutline.args = {
	title: 'Ramona Harrison',
	outline: 'Home',
};

export const withOutlineAndUnderline = Template.bind({});
withOutlineAndUnderline.args = {
	title: 'Ramona Harrison',
	outline: 'Home',
	underline: 'Developer',
};
