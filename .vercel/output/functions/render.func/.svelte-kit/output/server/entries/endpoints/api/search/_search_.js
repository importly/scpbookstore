import { p as prisma } from "../../../../immutable/chunks/_prismac-65a0508d.js";
import "@prisma/client";
async function GET({ params }) {
  let found_books;
  found_books = await prisma.book.findMany({
    where: {
      title: {
        contains: params.search
      }
    }
  });
  if (found_books) {
    return {
      status: 200,
      headers: {},
      body: found_books
    };
  }
  return {
    status: 404
  };
}
export {
  GET
};
