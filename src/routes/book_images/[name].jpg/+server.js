import { promises as fs } from 'fs';

export async function GET({ params }) {
	const asset = await fs.readFile(`./src/routes/book_images/${params.name}.jpg`);
	return {
		headers: {
			'Content-Type': 'image/jpeg' // this is the stupidest stuff I have seen. Basically, All of this code here is just so that this request sends this specific header of saying this is an image
		},
		body: asset
	};
}
