<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    let stuff = {
        name:   '',
        des:    '',
        sub:    '',
        type:   '',
        year:   '',
        pros:   '',
        cons:   '',
        rating: '',
        link:   '',
		uploader: '',
    };
	let final = undefined;
    let submit = async () => {
        let response = await fetch('/input_book', {
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
			name:   '',
			des:    '',
			sub:    '',
			type:   '',
			year:   '',
			pros:   '',
			cons:   '',
			rating: '',
			link:   '',
			uploader: '',
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
				<span class="font-bold">Title (Brand )</span>
				<input bind:value={stuff.name} type="text" placeholder="AP World" class="input input-bordered w-full max-w-xs" />
			</label>

			<label class="input-group">
				<span class="font-bold">Description</span>
				<textarea bind:value={stuff.des} class="textarea textarea-primary w-full max-w-xs" placeholder="..."></textarea>
			</label>

            <label class="input-group">
				<span class="font-bold">Subject</span>
				<input bind:value={stuff.sub} type="text" placeholder="AP WORLD HISTORY:MODERN" class="input input-bordered w-full max-w-xs" />
			</label>
            
            <span class="text-center"> Book Type: Input a number: 1 = AP Prep, 2 = IB Prep, 3 = General Prep, 4 = Other </span>
            <label class="input-group">
				<span class="font-bold">Book Type</span>
				<textarea bind:value={stuff.type} class="textarea textarea-primary w-full max-w-xs" placeholder="Bio"></textarea>
			</label>

            <label class="input-group">
				<span class="font-bold">Year</span>
				<input bind:value={stuff.year} type="text" placeholder="2022" class="input input-bordered w-full max-w-xs" />
			</label>

            <label class="input-group">
				<span class="font-bold">Pros</span>
				<textarea bind:value={stuff.pros} class="textarea textarea-primary w-full max-w-xs" placeholder="..."></textarea>
			</label>

            <label class="input-group">
				<span class="font-bold">Cons</span>
				<textarea bind:value={stuff.cons} class="textarea textarea-primary w-full max-w-xs" placeholder="..."></textarea>
			</label>

            <label class="input-group">
				<span class="font-bold">Rating</span>
				<input bind:value={stuff.rating} type="text" placeholder="5.0" class="input input-bordered w-full max-w-xs" />
			</label>

            <label class="input-group">
				<span class="font-bold">Online Link</span>
				<input bind:value={stuff.link} type="text" placeholder="AP WORLD HISTORY:MODERN" class="input input-bordered w-full max-w-xs" />
			</label>

			<label class="input-group">
				<span class="font-bold">Your Student ID</span>
				<input bind:value={stuff.uploader} type="text" placeholder="12345678" class="input input-bordered w-full max-w-xs" />
			</label>

			{#if final}
				<div class="text-red-500">{final.status}</div>
				
				<button class="btn btn-secondary" on:click={clear} >Clear Form</button>
			{/if}

            <button class="btn" on:click={submit} >Submit Book</button>
			
		</div>
	</div>
</div>
