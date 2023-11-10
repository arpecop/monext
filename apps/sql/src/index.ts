import { Client } from '@neondatabase/serverless';

export default {
	async fetch(request: Request, env, ctx) {
		async function readRequestBody(request: Request) {
			const contentType = request.headers.get('content-type') || 'application/json';
			if (contentType.includes('application/json')) {
				return JSON.stringify(await request.json());
			} else if (contentType.includes('application/text')) {
				return request.text();
			} else if (contentType.includes('text/html')) {
				return request.text();
			} else {
				// Perhaps some other type of data was submitted in the form
				// like an image, or some other binary data.
				return 'a file';
			}
		}

		if (request.method === 'POST') {
			const reqBody = await readRequestBody(request);

			const { query, db } = JSON.parse(reqBody);
			const client = new Client(db ? env.DATABASE_ML : env.DATABASE_URL);
			await client.connect();
			const queryx = query
				.replaceAll('DROP', '')
				.replaceAll('drop', '')
				.replaceAll('delete', '')
				.replaceAll('delete', '')
				.replaceAll('+', ' ') as string;
			const { rows } = await client.query(queryx);
			ctx.waitUntil(client.end());
			return new Response(JSON.stringify(rows));
		} else if (request.method === 'GET') {
			return new Response('{}');
		}
	},
};
