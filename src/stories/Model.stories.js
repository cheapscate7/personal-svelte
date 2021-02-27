import Model from '../components/Model.svelte';

export default {
	title: 'Model',
	component: Model,
};

const Template = args => ({
	Component: Model,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41dE4XUrKSL._AC_.jpg',
	name: 'model1',
	title: 'lorem Ipsum',
	subtitle: 'Lorem Ipsum',
	body:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna turpis, dictum ut tempus eget, sollicitudin ac erat. Sed ut pellentesque neque. Proin at erat vel tortor imperdiet finibus ut vitae dui. Suspendisse tristique nisl ut odio ultrices, iaculis venenatis nisi congue. Nam bibendum vitae sem eu porta. Aenean vehicula mauris quis eros condimentum, at iaculis orci dictum. Fusce efficitur quam nisl, nec varius ante placerat quis. Donec venenatis, orci quis faucibus rhoncus, leo nisi venenatis nunc, sed posuere urna libero vitae tellus. Duis tortor metus, accumsan ullamcorper scelerisque ut, efficitur nec mauris. Nunc dapibus massa id pulvinar finibus. Praesent justo ligula, tincidunt a mauris ut, porttitor commodo turpis.',
};

export const ShortBody = Template.bind({});
ShortBody.args = {
	imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41dE4XUrKSL._AC_.jpg',
	name: 'model1',
	title: 'lorem Ipsum',
	subtitle: 'Lorem Ipsum',
	body: 'Lorem ipsum dolor sit amet',
};
