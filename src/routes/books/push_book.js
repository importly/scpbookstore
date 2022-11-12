import { prisma } from './_prismac';

/** @type {import('../../../.svelte-kit/types/src/routes/books/__types/push_book').RequestHandler} */
export async function POST({ params }) {
	let STATUS_CREATED = 201,
		STATUS_INTERNAL_ERROR = 500,
		STATUS_NOT_IMPLEMENTED = 501;

	let books;

	books = await prisma.book.create({
		data: {
			// todo: use params & push data
		}
	});

	return {
		status: STATUS_NOT_IMPLEMENTED
	};
}
