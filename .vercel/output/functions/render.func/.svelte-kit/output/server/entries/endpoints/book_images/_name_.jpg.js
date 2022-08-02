import { promises } from "fs";
async function GET({ params }) {
  const asset = await promises.readFile(`./src/routes/book_images/${params.name}.jpg`);
  return {
    headers: {
      "Content-Type": "image/jpeg"
    },
    body: asset
  };
}
export {
  GET
};
