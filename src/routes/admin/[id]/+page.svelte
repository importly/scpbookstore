<script lang="ts">
	import type { PageData } from './$types';
	import { goto, invalidate } from '$app/navigation';
	//import crypto from 'crypto';

	export let data: PageData;
	let { type } = data;
	let pass = '';

	let encodeing = async () => {
		const encoder = new TextEncoder();
		const place = await window.crypto.subtle.digest(
			'SHA-256',
			encoder.encode(pass + ':stantonbooks')
		);
		const hashArray = Array.from(new Uint8Array(place));
		const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
		goto(`/admin/${hashHex}`).then(()=>{location.reload()})

	};
</script>

<div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
	<div
		class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
	>
		<div
			class="p-4 py-6 text-white bg-primary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
		>
			<div class="my-3 text-4xl font-bold tracking-wider text-center">Stanton Bookstore Admin</div>
		</div>
		<div class="p-5 bg-white md:flex-1">
			<h3 class="my-4 text-2xl font-semibold text-gray-700">Login</h3>
			<form action="#" class="flex flex-col space-y-5">
				<div class="flex flex-col space-y-1">
					<div class="flex items-center justify-between">
						<label for="password" class="text-sm font-semibold text-gray-500">Password</label>
					</div>
					<input
						type="password"
						id="password"
						bind:value={pass}
						class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-orange-700"
					/>
				</div>
				<div>
					<button
						type="submit"
						on:click={encodeing}
						class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
					>
						Log in
					</button>
				</div>
				{#if type == 'ee'}
				<div class="alert alert-error shadow-lg">
					<div>
					  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					  <span>Incorrect Password</span>
					</div>
				  </div>
				{/if}
			</form>
		</div>
		
	</div>
	
</div>

