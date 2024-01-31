import { COHERE_API_KEY } from '$env/static/private';

import { CohereClient } from 'cohere-ai';

export const load = async ({ locals }) => {
	let keys = '';
	if (locals.text) {
		keys = await getKeys(locals.text);
	}

	// const results = keys;
	// console.log(keys);
	return {
		results: keys
	};
};

async function getKeys(text) {
	const cohere = new CohereClient({
		token: COHERE_API_KEY
	});

	const results = await cohere.generate({
		prompt: `Extract relevant keywords from this job description ${text}.Keywords must be relevant to the job in question. Return only the list with comma separation. Dont add any other thing. `
	});
	return results.generations[0].text;
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const text = formData.get('text');

		locals.text = text;

		return {
			success: true
		};
	}
};
