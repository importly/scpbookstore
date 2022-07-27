<script>
	// populated with data from the endpoint
	export /**
	 * @type {{ title: any; image:any}}
	 */
	let item;
</script>

<head>	
<style>
	.background{
		display:block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		width: 50%;
		padding: 20px 10px;
		background-color: #FFFFF1;
	}
</style>
<style>
	.img{
		display:block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
</style>
<style>
	.title{
		text-align:center;
  		padding: 50px 32px;
	}
</style>
<style>
	.description{
		text-align:center;
  		padding: 50px 32px;
	}
</style>
<style>
	.button{
		display:block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
		padding: 30px 10px;
		background-color: #FFFFFF;
	}
</style>
</head>

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



<div class="flex-none card rounded-box place-items-center shadow-lg background">
	<div class="title">
		<h2>{item.title}</h2>
	</div>
	<div class="artboard ">
		<img class="max-w-sm rounded-lg shadow-2xl img" src={item.image} alt="book"/>
	</div>
	<div class="description">
		<p>{item.description}</p>
	</div>
	<div>
		<button type="button" style="text-align:center" class="card rounded-box place-items-center shadow-lg button">Check Out</button>
	</div>
</div>

