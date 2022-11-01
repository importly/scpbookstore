<script>
	// populated with data from the endpoint
	export /**
	 * @type {{ title: any; image:any; subject:any; description:any; condition:any; year:any; pros:any; cons:any; onlinelink:any;}}
	 */
	let item;
</script>

<div class="navbar shadow">
	<div class="navbar-start">
		<div class="navbar-start">
			<a href="." class="btn btn-square btn-ghost bg-accent">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
					><path fill="none" d="M0 0h24v24H0V0z" opacity=".87" /><path
						d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
					/></svg
				>
			</a>
		</div>
	</div>
	<div class="navbar-center">
		<a href=".." class="btn btn-ghost normal-case text-xl">Stanton Bookstore</a>
	</div>
	<div class="navbar-end">
		<a href="." class="btn btn-square btn-ghost bg-accent"> 🔍 </a>
	</div>
</div>

<div class="grid m-10 sm:grid-cols-1 lg:grid-cols-2 gap-3">
	<div>
		<div class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl ">
			<figure>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="sm:w-3/4 md:w-1/2 lg:w-3/4 rounded-lg sm:my-1 md:my-3 lg:my-4"
					src={item.image}
					alt="Book image"
				/>
			</figure>
		</div>
	</div>
	<div class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-2xl">
		<div class="card-body">
			<h2 class="text-4xl text-center mt-8 mb-4">{item.title}</h2>
			<!-- spacing -->

			<span class="self-center badge font-bold badge-accent mb-4">{item.subject}</span>

			<h1 class="text-center text-base">{item.description}</h1>

			<div class="stats stats-vertical md:stats-horizontal shadow-lg my-5">
				<div class="stat">
					<div class="stat-title">Year Published</div>
					<div class="stat-value">{item.year}</div>
					<div class="stat-desc">
						{#if 2023 - item.year == 1}
							{2023 - item.year} year old
						{:else}
							{2023 - item.year} years old
						{/if}
					</div>
				</div>

				<div class="stat">
					<div class="stat-title">Editor Opinion</div>
					<div class="my-3">
					{#if item.rating > 4}
						<span class="badge font-bold badge-success">
							{#if item.rating == 1}
								{item.rating} star
							{:else}
								{item.rating} stars
							{/if}
						</span>
						<progress class="progress progress-success " value={item.rating} max="5" />
					{:else if item.rating <= 4 && item.rating > 3}
						<span class="badge font-bold badge-success">
							{#if item.rating == 1}
								{item.rating} star
							{:else}
								{item.rating} stars
							{/if}
						</span>
						<progress class="progress progress-success" value={item.rating} max="5" />
					{:else if item.rating <= 3 && item.rating > 2}
						<span class="badge font-bold badge-warning">
							{#if item.rating == 1}
								{item.rating} star
							{:else}
								{item.rating} stars
							{/if}
						</span>
						<progress class="progress progress-warning" value={item.rating} max="5" />
					{:else if item.rating <= 2 && item.rating > 1}
						<span class="badge font-bold badge-warning">
							{#if item.rating == 1}
								{item.rating} star
							{:else}
								{item.rating} stars
							{/if}
						</span>
						<progress class="progress progress-warning" value={item.rating} max="5" />
					{:else if item.rating <= 1}
						<span class="badge font-bold badge-error">
							{#if item.rating == 1}
								{item.rating} star
							{:else}
								{item.rating} stars
							{/if}
						</span>
						<progress class="progress progress-error" value={item.rating} max="5" />
					{/if}
					</div>
				</div>
<!--
				<div class="stat">
					<!-- Conditions 
					<div class="stat-title">Condition</div>
					<div class="my-3">
					{#if item.condition == 10}
						<span class="badge font-bold badge-success">Brand New</span>
						<progress class="progress progress-success" value={item.condition} max="10" />
					{:else if item.condition < 10 && item.condition >= 8}
						<span class="badge font-bold badge-success">Pretty Good</span>
						<progress class="progress progress-success" value={item.condition} max="10" />
					{:else if item.condition < 8 && item.condition >= 5}
						<span class="badge font-bold badge-warning">Decent</span>
						<progress class="progress progress-warning" value={item.condition} max="10" />
					{:else if item.condition < 5 && item.condition > 3}
						<span class="badge font-bold badge-warning">Bad</span>
						<progress class="progress progress-warning" value={item.condition} max="10" />
					{:else if item.condition <= 3}
						<span class="badge font-bold badge-error">Terrible</span>
						<progress class="progress progress-error" value={item.condition} max="10" />
					{/if}
					</div>
				</div> -->
			</div>


			<div class="stats stats-vertical lg:stats-horizontal shadow-2xl">
				<div class="stat">
				  <div class="stat-title card-title">Pros</div>
				  {@html item.pros}
				</div>
				
				<div class="stat">
				  <div class="stat-title card-title">Cons</div>
					{@html item.cons}
				</div>				
			  </div>


			<div class="btn-group justify-center mt-5">
				<!-- <a class="btn btn-primary">Pick Up</a> -->
				<a href="{item.onlinelink}" target="_blank" rel="noreferrer noopener" class="btn btn-second">Amazon Link</a>
			</div>
		</div>
	</div>
</div>
