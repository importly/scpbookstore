import { prisma } from '../books/_prismac';
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({request}) => {
    const body = await request.json();
    try {
    let new_book = await prisma.book.create({data: {
        title: body.name,
        description: body.des,
        subject: body.sub,
        book_type: parseInt(body.type),
        year: parseInt(body.year),
        pros: body.pros,
        cons: body.cons,
        rating: parseFloat(body.rating),
        onlinelink: body.link,
        ispublic: true,
        uploader: parseInt(body.uploader),
    }});
} catch (e) {
    return new Response(JSON.stringify({"status": e.message}));
}

    return new Response(JSON.stringify({"status":"Book added"}));
};