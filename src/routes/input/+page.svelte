<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    let stuff = {
        name: '',
        des: '',
        sub: '',
        type: '',
        year: '',
        pros: '',
        cons: '',
        file: '',
        rating: '',
        link: '',
    };
    let submit = () => {
        console.log(stuff);
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
				<span class="font-bold">Title</span>
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
				<textarea bind:value={stuff.rating} class="textarea textarea-primary w-full max-w-xs" placeholder="..."></textarea>
			</label>

            <label class="input-group">
				<span class="font-bold">Online Link</span>
				<input bind:value={stuff.link} type="text" placeholder="AP WORLD HISTORY:MODERN" class="input input-bordered w-full max-w-xs" />
			</label>
            
            <span class="font-bold">General Photo</span>
            <input bind:value={stuff.file} type="file" class="file-input file-input-bordered w-full max-w-xs" />

            <button class="btn" on:click={submit} >Submit Book</button>
		</div>
	</div>
</div>
