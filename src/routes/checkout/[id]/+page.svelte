<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let { book_info } = data

    let stuff = {
        name:   book_info?.title,
        des:    book_info?.description,
        sub:    book_info?.subject,
        type:   book_info?.book_type,
        year:   book_info?.year,
        pros:   book_info?.pros,
        cons:   book_info?.cons,
        rating: book_info?.rating,
        link:   book_info?.onlinelink,
		uploader: book_info?.uploader,
		condition: book_info?.condition,
		id: book_info?.id

    };
	let final = undefined;
    let submit = async () => {
        let response = await fetch('/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(stuff)
		})
		final = await response.json();
		console.log(final)
    }

</script>

<!-- Path: src\routes\input\+page.svelte -->

<div class="glass bg-opacity-60 m-5 items-center rounded-box content-center">
	<div class="text-center text-6xl font-bold">Book Update</div>



	<div class="text-center text-2xl font-bold m-5">
		This page is to update and change book Information<br />
	</div>

	<div class="text-center text-2xl font-bold m-5">
		Current Book Information Below <br />

		<div class="divider font-extrabold">Title</div>
		{book_info?.title}<br />
		<div class="divider font-extrabold">Description</div>
		{book_info?.description}<br />
		<div class="divider font-extrabold">Subject</div>
		{book_info?.subject}<br />
		<div class="divider font-extrabold">Book Type</div>
		1 = AP Prep, 2 = IB Prep, 3 = General Prep, 4 = Other<br />
		{book_info?.book_type}<br />
		<div class="divider font-extrabold">Year</div>
		{book_info?.year}<br />
		<div class="divider font-extrabold">Pros</div>
		{book_info?.pros}<br />
		<div class="divider font-extrabold">Cons</div>
		{book_info?.cons}<br />
		<div class="divider font-extrabold">Rating</div>
		{book_info?.rating}<br />
		<div class="divider font-extrabold">Online Link</div>
		{book_info?.onlinelink}<br />
		<div class="divider font-extrabold">Condition</div>
		{book_info?.condition}<br />
		<div class="divider font-extrabold">Code ID</div>
		{book_info?.id}<br />
	</div>

	<div class="text-center text-2xl font-bold m-5">
		If anything is wrong, change it down here<br />
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
				<span class="font-bold">Rating 1-5</span>
				<input bind:value={stuff.rating} type="text" placeholder="5.0" class="input input-bordered w-full max-w-xs" />
			</label>

			<label class="input-group">
				<span class="font-bold">Condition 1-10</span>
				<input bind:value={stuff.condition} type="text" placeholder="5.0" class="input input-bordered w-full max-w-xs" />
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
			{/if}

            <button class="btn" on:click={submit}>Submit Book</button>
		</div>
	</div>
</div>


<!-- <script>
	// populated with data from the endpoint
	export let data;
	let {book_info} = data;
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Checkout now?</h1>
			<p class="py-6 font-semibold text-lg">{book_info.title}</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Enter Your Student ID and Press Checkout Below to Confirm</span
						>
					</label>
					<input type="text" placeholder="Student ID" class="input input-bordered" />
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary">Checkout</button>
					<a href="../books/{book_info.id}" class="btn btn-primary mt-3">Review Book</a>
				</div>
			</div>
		</div>
	</div>
</div> -->
