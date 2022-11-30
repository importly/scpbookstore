import { error, json } from '@sveltejs/kit';
import { prisma } from './_prismac';

/** @type {import('../../../.svelte-kit/types/src/routes/book/__types/index').PageServerLoad} */
export async function load({ params }) {
	// `params.id` comes from [id].js
	let book;

	book = await prisma.book.findMany({
		// vv easy db manager
		where: {
			ispublic: true // look for a unique book with in the book database with the id given by the website.
		} // id is always unique becuase there is only one id per book, it auto increments.
	});

	if (book) {
		return { book };
	}

	return error(400, 'not found');
}
