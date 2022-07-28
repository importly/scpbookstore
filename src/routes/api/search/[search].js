import { prisma } from '../../books/_prismac.js';

/** @type {import('../../../.svelte-kit/types/src/routes/books/__types/index').RequestHandler} */
export async function GET({ params }) {
	// `params.id` comes from [id].js
	let found_books;

	found_books = await prisma.book.findMany({
		// vv easy db manager
		where: {
			title: {
                contains: params.search
            }  // look for a unique book with in the book database with the id given by the website. 
		} // id is always unique becuase there is only one id per book, it auto increments.
	});

	if (found_books) {
		return {
			status: 200,
			headers: {},
			body: found_books // if we found the book, give the information back.
		};
	}

	return {
		status: 404 // idk what happened, probably didn't find the book
	};
}
