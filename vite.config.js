// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// server: {
	// 	https: {
	// 		key: fs.readFileSync('./secret/scpbooks.org.key'),
	// 		cert: fs.readFileSync('./secret/scpbooks.org.pem')
	// 	}
	// }
};

export default config;
