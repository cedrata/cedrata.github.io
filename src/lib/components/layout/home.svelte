<script>
	/** @type {string} */
	export let propic1;

	/** @type {string}*/
	export let id;

	/** @return {void}*/
	function scrollDown() {
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: document.getElementById(id)?.offsetHeight
		})
	}
</script>

<div {id}>
	<div class="hero lg:h-screen min-h-screen">
		<div class="hero-content w-screen flex-col lg:flex-row-reverse justify-between max-w-[1240px]">
			<div class="avatar shadow-xl">
				<div class="w-auto rounded">
					<img alt="propic one" src={propic1} class="max-w-md" />
				</div>
			</div>
			<div class="max-w-md drop-shadow-2x max-lg:text-center">
				<h1 class="mb-5 text-5xl font-bold">Hello, world!</h1>
				<p class="mb-5">I'm Luca, a young and passionade full-stack and software developer, but there's more... Scroll down to know more about me!</p>
				<button class="btn btn-info" on:click={scrollDown}>Let's go</button>
			</div>
		</div>
	</div>
</div>
