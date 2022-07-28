<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

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
				<li><a>Homepage</a></li>
				<li><a>Portfolio</a></li>
				<li><a>About</a></li>
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
		<p>...waiting</p>
	{:then books}
		{#each books as book}
			<a
				href="books/{book.id}"
				class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl transition-all duration-200 hover:shadow hover:-translate-y-1"
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
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	{:else}
	{#each books as book}
			<a
				href="books/{book.id}"
				class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl transition-all duration-200 hover:shadow hover:-translate-y-1"
			>
				<figure>
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
