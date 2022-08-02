export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-7faf01c6.js","imports":["immutable/start-7faf01c6.js","immutable/chunks/index-bffaed58.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "books",
				pattern: /^\/books\/?$/,
				names: [],
				types: [],
				path: "/books",
				shadow: () => import('../output/server/entries/endpoints/books/index.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/search/[search]",
				pattern: /^\/api\/search\/([^/]+?)\/?$/,
				names: ["search"],
				types: [null],
				load: () => import('../output/server/entries/endpoints/api/search/_search_.js')
			},
			{
				type: 'endpoint',
				id: "book_images/[name].jpg",
				pattern: /^\/book_images\/([^/]+?)\.jpg$/,
				names: ["name"],
				types: [null],
				load: () => import('../output/server/entries/endpoints/book_images/_name_.jpg.js')
			},
			{
				type: 'page',
				id: "books/[id]",
				pattern: /^\/books\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => import('../output/server/entries/endpoints/books/_id_.js'),
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
