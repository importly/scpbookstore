// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit()],
        // server: {
        //         https: {
        //                 key: fs.readFileSync('/path-to-key'),
        //                 cert: fs.readFileSync('/path-to-cert')
        //         }
        // }
};

export default config;
