import { error, json } from '@sveltejs/kit';
import { prisma } from '../../books/_prismac';

/** @type {import('../../../.svelte-kit/types/src/routes/checkout/__types/[id]').PageServerLoad} */
export async function load({ params }) {
	// `params.id` comes from [id].js
	let book_info = await prisma.book.findFirst({
		// vv easy db manager
		where: {
			hashedId: params.id
		}
	});
	if (!book_info) {
		return error(404, 'Book not found');
	}

	return { book_info };
}
// try to add
