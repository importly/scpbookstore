import { promises as fs } from 'fs';

export async function GET({ params }) {
	const asset = await fs.readFile(`./src/routes/book_images/${params.name}.jpg`);
	return new Response(asset, {headers:{'content-type': 'image/jpeg'}});

}
