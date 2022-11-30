const encoder = await import('node:crypto');
import { prisma } from './routes/books/_prismac.js';

let physical_books;

physical_books = await prisma.physicalBook.findMany({})

for(let i=0; i<physical_books.length;i++){
    let book = physical_books.at(i);
    const hash = encoder.createHash('sha256');
    hash.update(book?.id.toString()+":stantonbooks")
    let hashed = hash.digest('base64url')
    console.log('"'+hashed+'",')
    await prisma.physicalBook.update({where:{id:book.id},data:{hashedId:hashed}})
}

// books = await prisma.book.findMany({});


console.log(physical_books)
