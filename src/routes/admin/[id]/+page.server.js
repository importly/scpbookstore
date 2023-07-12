import { error, json } from '@sveltejs/kit';
import { prisma } from '../../books/_prismac';
import { env } from 'node:process';

/** @type {import('../../../.svelte-kit/types/src/routes/checkout/__types/[id]').PageServerLoad} */
export async function load({ params }) {
	// `params.id` comes from [id].js
	if (!params.id) {
		return error(404, 'Not found');
	}
	if (params.id === 'login') {
		return { type: 'login' };
	}
	
	if (params.id === env.HASHED_ID) {
		return { type: 'admin' };
	} else {
		return { type: 'ee' };
	}
}

}