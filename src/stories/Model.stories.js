import Model from '../components/Model.svelte';
import ModelWithShortBody from './ModelWithShortBody.svelte';
import ModelWithLongBody from './ModelWithLongBody.svelte';

export default {
	title: 'Model',
	component: Model,
};

const Template = args => ({
	Component: ModelWithLongBody,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41dE4XUrKSL._AC_.jpg',
	name: 'model1',
	title: 'lorem Ipsum',
	subtitle: 'Lorem Ipsum',
};

const Template2 = args => ({
	Component: ModelWithShortBody,
	props: args,
});

export const ShortBody = Template2.bind({});
ShortBody.args = {
	imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41dE4XUrKSL._AC_.jpg',
	name: 'model1',
	title: 'lorem Ipsum',
	subtitle: 'Lorem Ipsum',
};
