import marked from 'marked';

module.exports = async (req, res) => {
	console.log('Called');
	const document = await fetch('https://cheapscate7.github.io/json-repo/personal-svelte/home.json').then(res =>
		res.json()
	);
	// const date = new Date().toString();
	res.status(200).send(document);
};
