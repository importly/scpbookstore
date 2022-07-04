import { prisma } from "./_prismac";

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    // `params.id` comes from [id].js
    let item;
    prisma.book.findFirst();
   
    if (item) {
      return {
        body: { item }
      };
    }
   
    return {
      status: 404
    };
  }