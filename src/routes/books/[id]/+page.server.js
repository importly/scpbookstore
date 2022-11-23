import { prisma } from '../_prismac';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// `params.id` comes from [id].js
	let item;

	if (isNaN(parseInt(params.id))) throw error(400, 'not found');

	item = await prisma.book.findUnique({
		// vv easy db manager
		where: {
			id: parseInt(params.id) // look for a unique book with in the book database with the id given by the website.
		} // id is always unique becuase there is only one id per book, it auto increments.
	});

	if (item) {
		return {item}
	}

	throw error(400, 'not found');
}
// try to add
