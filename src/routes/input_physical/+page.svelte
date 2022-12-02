<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    let stuff = {
		uploader: '',
		condition: '',
		rating: '',
		unique_book_id: '',
		description: '',
    };
	let final = undefined;
    let submit = async () => {
        let response = await fetch('/input_physical', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(stuff)
		})
		final = await response.json();
		console.log(final)
    }

	let clear = () => {
		stuff = {
			uploader: '',
			condition: '',
			rating: '',
			description: '',
			unique_book_id: '',
		}
	}

</script>

<!-- Path: src\routes\input\+page.svelte -->

<div class="glass bg-opacity-60 m-5 items-center rounded-box content-center">
	<div class="text-center text-6xl font-bold">Book Submission</div>

	<div class="text-center text-2xl font-bold m-5">
		Please fill out the form below to submit a book type. <br /> (The unique brand or book company)
	</div>

	<div class="grid place-items-center">
		<div class="form-control gap-5">
			<label class="input-group">
				<span class="font-bold">Your ID</span>
				<input bind:value={stuff.uploader} type="text" placeholder="12345678" class="input input-bordered w-full max-w-xs" />
			</label>

			<label class="input-group">
				<span class="font-bold">Description</span>
				<textarea bind:value={stuff.description} class="textarea textarea-primary w-full max-w-xs" placeholder="..."></textarea>
			</label>

            <label class="input-group">
				<span class="font-bold">Conditon on a scale of 1-10</span>
				<input bind:value={stuff.condition} type="text" placeholder="8" class="input input-bordered w-full max-w-xs" />
			</label>
            
			<label class="input-group">
				<span class="font-bold">Your rating 1-5</span>
				<input bind:value={stuff.rating} type="text" placeholder="4" class="input input-bordered w-full max-w-xs" />
			</label>

            <label class="input-group">
				<span class="font-bold">What book does it go to? Put it's id here</span>
				<input bind:value={stuff.unique_book_id} type="text" placeholder="16" class="input input-bordered w-full max-w-xs" />
			</label>

			{#if final}
				<div class="text-red-500">{final.status}</div>
				
				<button class="btn btn-secondary" on:click={clear} >Clear Form</button>
			{/if}

            <button class="btn" on:click={submit} >Submit Book</button>
			
		</div>
	</div>
</div>
