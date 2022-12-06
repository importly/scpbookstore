import { prisma } from '../books/_prismac';
import type { RequestHandler } from '../input_book/$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	try {
        if (!body.loaner || body.loaner === '' || body.loaner.length != 8) {
            throw new Error('Valid Student ID is required');
        }
        let book = await prisma.book.update({
            where: {
                id: body.id
            },
            data: {
                loaner: body.loaner,
            }
        });
	} catch (e) {
		console.log(e.message);
		return new Response(JSON.stringify({ status: e.message }));
	}
	return new Response(JSON.stringify({ status: 'Congrats, You checked out this book. Bring it back in two weeks.' }));
};
