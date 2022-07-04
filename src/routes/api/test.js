/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const data = await event.request
    console.log();
    return {
      body: {
        // retrieve a specific header
        something: "hi"
      },
      
    };
  }