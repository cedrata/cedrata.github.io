<script>
	/** @type {string} */
	export let propic1;

	/** @type {string}*/
	export let id;
</script>

<div {id}>
	<div class="hero lg:h-screen">
		<div class="hero-content w-screen flex-col lg:flex-row-reverse justify-between max-w-[1240px]">
			<div class="avatar shadow-xl">
				<div class="w-auto rounded">
					<img alt="propic one" src={propic1} class="max-w-md" />
				</div>
			</div>
			<div class="max-w-md drop-shadow-2x">
				<h1 class="mb-5 text-5xl font-bold">Hello, world!</h1>
				<p>I'm Luca, a young and passionade full-stack and software developer, but there's more...</p>
				<p class="mb-5">Scroll down to know more about me!</p>
				<button class="btn btn-primary">Let's go</button>
			</div>
		</div>
	</div>
</div>
