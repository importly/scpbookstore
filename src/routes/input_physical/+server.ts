import { prisma } from '../books/_prismac';
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({request}) => {
    const body = await request.json();
    try {
    let new_book = await prisma.physicalBook.create({data: {
        uploader: parseInt(body.uploader),
        condition: parseInt(body.condition),
        rating: parseFloat(body.rating),
        bookId: parseInt(body.unique_book_id),
        description: body.des,
    }});
} catch (e) {
    return new Response(JSON.stringify({"status": e.message}));
}

    return new Response(JSON.stringify({"status":"Book added"}));
};