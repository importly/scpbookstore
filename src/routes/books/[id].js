import { prisma } from './_prismac';

/** @type {import('../../../.svelte-kit/types/src/routes/books/__types/[id]').RequestHandler} */
export async function GET({ params }) {
	// `params.id` comes from [id].js
	let item;
	
	item = await prisma.book.findUnique({
			// vv easy db manager
			where: {
				id: parseInt(params.id) // look for a unique book with in the book database with the id given by the website.
			} // id is always unique becuase there is only one id per book, it auto increments.
		});

	if (item) {
		return {
			status: 200,
			headers: {},
			body: { item } // if we found the book, give the information back.
		};
	}

	return {
		status: 404 // idk what happened, probably didn't find the book
	};
}
