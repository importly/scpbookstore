<script>
	import { fade, blur, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
</script>

<div
	class="
top-0 flex h-16 w-full justify-center bg-opacity-100 backdrop-blur transition-all duration-100 
bg-base-100 text-base-content
"
>
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
		<div class="navbar-end" />
	</div>
</div>

<div
	class="hero min-h-screen bg-base-200"
	style="background-image: url(https://40jyosdgqhu3jszqo3nqdbyq-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2020/10/Stanton-Prep-Library-Sitting-Area.jpg);"
>
	<div class="hero-overlay bg-opacity-90" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-xl">
			<h1 class="mb-5 mt-8 text-5xl font-bold">The Importance of Prep Books</h1>
			<p>
				According to College Board, with just 6 to 8 hours of prep, students can raise their SAT
				scores by an average of 90 points on their SAT scores.
			</p>
			<div class="stats shadow mt-5">
				<div class="stat">
					<div class="stat-title">Hours to studying Official SAT Practice book</div>
					<div class="stat-value">6-8 hours = 90+ SAT score</div>
					<div class="stat-desc">Very effective</div>
				</div>
			</div>
			<p class="mt-5">
				Going to a competitive college preparatory school, where 100% of students take AP classes,
				we have noticed that many of our fellow classmates want to prepare for tests but are unable
				to access high-quality study resources
			</p>
			
			<h1 class="mb-5 mt-24 text-5xl font-bold">About</h1>
			<p class="mb-5">
				The AP/SAT Prep Book Drive is a student run system library that provides a wide range of
				test preparation and school books for Stanton students. All of our books are donated from
				upperclassmen who were stuck with books they did not need anymore which allows us to let
				other students to reuse the books, therefore reducing costs and limiting waste. This website
				gives the opportunity for other students to benefit from their donated books.
			</p>
			<br />
			<!-- <a href="/books" class="btn">View Books</a> -->

			<div
				tabindex="0"
				class=" mt-5  collapse collapse-arrow border border-base-300 rounded-box shadow-2xl"
			>
				<div class="collapse-title text-xl font-medium">How do I donate books?</div>
				<div class="collapse-content">
					<p>
						A school-wide book drive will be held for 2 weeks where students will be able to drop
						off any pre-owned Prep Books for AP courses, SAT/ACT, etc. at the school library. The
						school librarians will hold onto these donated books for later sorting and review. Check
						with SGA and the Class Office Social Media for more information about date.
					</p>
				</div>
			</div>
			<div
				tabindex="0"
				class=" mt-5 mb-10 collapse collapse-arrow border border-base-300 rounded-box shadow-2xl"
			>
				<div class="collapse-title text-xl font-medium">How do I pick up a book?</div>
				<div class="collapse-content">
					<p>
						Students will be able to pick up books from a section of the library dedicated to this
						system.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="items-center grid-flow-col">
		<img
			src="https://cdn.discordapp.com/attachments/986857054616576020/1006284666032095342/image.png"
			width="36"
			height="36"
			viewBox="0 0 30 30"
			fill-rule="evenodd"
			clip-rule="evenodd"
		/>
		<p>Made by Aryan Thakur, Jennifer Chen, Victor Zhang, and Sid Yerramilli <br /> 2022</p>
	</div>
	<!-- <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
      </a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div> -->
</footer>
