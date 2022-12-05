const encoder = await import('node:crypto');
import { prisma } from './routes/books/_prismac.js';

let books;

books = await prisma.book.findMany({});

for (let i = 0; i < books.length; i++) {
	let book = books.at(i);

    // await prisma.book.update({where: {id: book.id}, data: {checked_out: false}}); // set all books to not checked out



    // Fix title formatting

    // let btitle = book?.title.split(' ').map((word) => {
    //     if (!word) {return undefined}
    //     return word[0].toUpperCase() + word.slice(1).toLowerCase();
    // }).join(' ');

	// await prisma.book.update({
	// 	where: { id: book.id },
	// 	data: {
	// 		title: btitle?.replaceAll("Ap", "AP")
	// 	}
	// });


	// Fix book subject formatting

	// await prisma.book.update({where:{id:book.id},data:{subject:book?.subject.toUpperCase()}})

	// Hashing books

	const hash = encoder.createHash('sha256');
	hash.update(book?.id.toString()+":stantonbooks")
	let hashed = hash.digest('base64url')
	console.log('"'+book?.id+'":"'+hashed+'",')
	await prisma.book.update({where:{id:book.id},data:{hashedId:hashed}})
}

// books = await prisma.book.findMany({});

//console.log(books);
