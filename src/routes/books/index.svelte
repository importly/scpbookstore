<script>
	import { fade, blur, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export /**
	 * @type {any}
	 */
	let books;
	/**
	 * @type {any}
	 */
	let search_term;
	let promise = Promise.resolve([]);

	async function fetchBooks(search_term) {
		const url = `../api/search/${search_term}`;
		const response = await self.fetch(url);
		console.log(`../api/search/${search_term}`);
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(books);
		}
	}

	$: {
		// Now set it to the real fetch promise
		if (search_term) {
			promise = fetchBooks(search_term);
		}
	}
</script>

<div class="navbar shadow">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost bg-accent">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/books">Books</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="." class="btn btn-ghost normal-case text-xl">Stanton Bookstore</a>
	</div>
	<div class="navbar-end">
		<input
			bind:value={search_term}
			type="text"
			placeholder="Search Books"
			class="input input-bordered w-full max-w-xs"

		/>
	</div>
</div>

<div class="grid gap-4  sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 my-5 mx-5">
	{#if search_term}
		{#await promise}
			<p>...Loading</p>
		{:then books}
			{#if books.length != 0}
				{#each books as book, index (book)}
					<a
						href="books/{book.id}"
						class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl transition-all duration-200 hover:shadow hover:-translate-y-1"
						animate:flip
						in:fade
					>
						<figure>
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<img
								class="sm:w-44 md:w-64 lg:w-72 rounded-lg sm:my-1 md:my-3 lg:my-4"
								src={book.image}
								alt="Book image"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">{book.title}</h2>
							<div class="card-actions justify-end">
								<div class="badge badge-outline">{book.subject}</div>
							</div>
						</div>
					</a>
				{/each}
			{:else}
				<h6 class="content-center">No books found</h6>
			{/if}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	{:else}
		{#each books as book, index (book)}
			<a
				href="books/{book.id}"
				class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl transition-all duration-200 hover:shadow hover:-translate-y-1"
				animate:flip
				in:fade
			>
				<figure>
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="sm:w-44 md:w-64 lg:w-72 rounded-lg sm:my-1 md:my-3 lg:my-4"
						src={book.image}
						alt="Book image"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{book.title}</h2>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">{book.subject}</div>
					</div>
				</div>
			</a>
		{/each}
	{/if}
</div>



<footer class="footer text-base-content items-center bg-base-200 text-neutral-content inset-x-0 bottom-0 h-16 px-3 shadow-inner">
	<div class="items-center grid-flow-col ">
		<img
			class="invert"
			src="https://cdn.discordapp.com/attachments/986857054616576020/1006284666032095342/image.png"
			width="36"
			height="36"
			viewBox="0 0 30 30"
			fill-rule="evenodd"
			clip-rule="evenodd"
		/>
		<p class= "text-black">Made by Aryan Thakur, Jennifer Chen, Victor Zhang, and Sid Yerramilli <br /> 2022</p>
	</div>
	<!-- <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
      </a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div> -->
</footer>
