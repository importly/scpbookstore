const encoder = await import('node:crypto');
import { prisma } from './routes/books/_prismac.js';

let books;

for (let i = 135; i < 185; i++) {
	// let book = await prisma.book.create({
	// 	data: {
	// 		id: i,
	// 		uploader: 11877396,
	// 		title: "None",
	// 		book_type: 1,
	// 		subject: "NONE",
	// 		checked_out: false,
	// 	},
	// })
	
   let book = await prisma.book.findUnique({ where: { id: i } }).then((booky) => {});


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
	hash.update(i.toString() + ':stantonbooks');
	let hashed = hash.digest('base64url');
	console.log('"' + i + '":"' + hashed + '",');
	await prisma.book.update({ where: { id: i }, data: { hashedId: hashed } });
}

// books = await prisma.book.findMany({});

//console.log(books);
