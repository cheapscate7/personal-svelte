import Button from '../components/Button.svelte';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		click: { action: 'click' },
	},
};

const Template = args => ({
	Component: Button,
	props: args,
	on: {
		click: action('click'),
	},
});

export const Primary = Template.bind({});
Primary.args = {
	label: 'Send',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Send',
	type: 'secondary',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
	label: 'Send',
	type: 'primary',
	text: true,
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
	label: 'Send',
	type: 'secondary',
	text: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
	label: 'Send',
	disabled: true,
};
