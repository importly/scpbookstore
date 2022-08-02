import { p as prisma } from "../../../immutable/chunks/_prismac-65a0508d.js";
import "@prisma/client";
async function GET({ params }) {
  let books;
  books = await prisma.book.findMany({
    where: {
      ispublic: true
    }
  });
  if (books) {
    return {
      status: 200,
      headers: {},
      body: { books }
    };
  }
  return {
    status: 404
  };
}
export {
  GET
};
