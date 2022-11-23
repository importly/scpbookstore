import { json } from '@sveltejs/kit';
import { prisma } from '../../../books/_prismac.js';

export async function GET({ params }) {
	// `params.id` comes from [id].js
	let found_books = await prisma.book.findMany({
		// vv easy db manager
		where: {
			title: {
				contains: params.search
			} // look for a unique book with in the book database with the id given by the website.
		} // id is always unique becuase there is only one id per book, it auto increments.
	});

	if (found_books) {
		return new Response(JSON.stringify(found_books));
	}

	return new Response(undefined, { status: 404 });
}
