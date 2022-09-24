<script>
	// populated with data from the endpoint
	export /**
	 * @type {{ title: any; image:any; subject:any; description:any; condition:any;}}
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
	<div class="navbar-end" />
</div>


<div class="grid m-10 sm:grid-cols-1 lg:grid-cols-2 gap-3">
	<div>
		<div 
			class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl "
		>		
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
	<div class="card card-compact w-auto border border-base-content/20 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="text-3xl text-center">{item.title}</h2>
			<!-- spacing -->
			<h1> </h1>
			<h1 class="text-xl text-center">{item.subject}</h1>
			<h1 class= "text-center text-base">{item.description}</h1>
			<div >
				Condition : {item.condition}
				<progress class="progress" value={item.condition} max="10"></progress>
			</div>
		</div>
	</div>
</div>
