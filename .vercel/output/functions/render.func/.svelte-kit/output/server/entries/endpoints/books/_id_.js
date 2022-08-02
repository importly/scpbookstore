import { p as prisma } from "../../../immutable/chunks/_prismac-65a0508d.js";
import "@prisma/client";
async function GET({ params }) {
  let item;
  item = await prisma.book.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });
  if (item) {
    return {
      status: 200,
      headers: {},
      body: { item }
    };
  }
  return {
    status: 404
  };
}
export {
  GET
};
