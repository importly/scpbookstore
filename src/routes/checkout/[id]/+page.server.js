import { error, json } from '@sveltejs/kit';
import { prisma } from '../../books/_prismac';

/** @type {import('../../../.svelte-kit/types/src/routes/checkout/__types/[id]').PageServerLoad} */
export async function load({ params }) {
	// `params.id` comes from [id].js
	
	let item = await prisma.physicalBook.findFirst({
		// vv easy db manager
		where: {
			hashedId: params.id
		}
	});

	if (item) {
		let book_info = await prisma.book.findUnique({
			// vv easy db manager
			where: {
				id: item.bookId
			}
		});

		return { item, book_info };
	}

	return error(400, 'not found');
}
// try to add
