<script>
	// populated with data from the endpoint
	export /**
	 * @type {{ title: any; image:any; subject:any; description:any; condition:any; year:any; pros:any; cons:any; onlinelink:any;}}
	 */
	let item;
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Checkout now?</h1>
			<p class="py-6 font-semibold text-lg">{item.title}</p>
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
					<a href="../books/16" class="btn btn-primary mt-3">Review Book</a>
				</div>
			</div>
		</div>
	</div>
</div>
