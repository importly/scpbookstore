import { prisma } from '../books/_prismac';
import type { RequestHandler } from '../input_book/$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	try {
        let book = await prisma.book.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                description: body.description,
                subject: body.subject,
                book_type: parseInt(body.type),
                year: parseInt(body.year),
                pros: body.pros,
                cons: body.cons,
                rating: parseFloat(body.rating),
                onlinelink: body.onlinelink,
                condition: parseInt(body.condition)
            }
        });
        console.log(book);
        console.log(body)
	} catch (e) {
		return new Response(JSON.stringify({ status: e.message }));
	}
	return new Response(JSON.stringify({ status: 'Book Updated, Refresh to see Changes' }));
};
