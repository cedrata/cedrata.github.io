<script>
	import About from '$lib/components/layout/about.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Home from '$lib/components/layout/home.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import { assets } from '$app/paths';

	/** @type {string} */
	const propic1 = assets + '/images/seriuos.jpeg';

	/**
	 * @param {string} id
	 * @return {any}
	 * */
	function scrollDown(id) {
		console.log();
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: document.getElementById(id)?.offsetHeight
		});
	}
</script>

<!-- <Navbar /> -->
<section id="home" class="relative bg-gradient-to-b from-secondary-focus to-primary">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		class="absolute bottom-0 max-lg:hidden"
		><path
			class="fill-base-100"
			fill-opacity="1"
			d="M0,96L60,80C120,64,240,32,360,53.3C480,75,600,149,720,186.7C840,224,960,224,1080,240C1200,256,1320,288,1380,304L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
		/></svg
	>
	<div class="hero lg:h-screen min-h-screen">
		<div class="hero-content w-screen flex-col lg:flex-row-reverse justify-between max-w-[1240px]">
			<div class="avatar shadow-xl">
				<div class="w-auto rounded">
					<img alt="propic one" src={propic1} class="max-w-md" />
				</div>
			</div>
			<div class="max-w-md drop-shadow-2x max-lg:text-center">
				<h1 class="mb-5 text-5xl font-bold">Hello, world!</h1>
				<p class="mb-5">
					I'm Luca, a young and passionade full-stack and software developer, but there's more...
					Scroll down to know more about me!
				</p>
				<button class="btn btn-info" on:click={() => scrollDown('home')}>Let's go</button>
			</div>
		</div>
	</div>
</section>
<!-- </div> -->
<!-- <div class="bg-base-200 bg-gradient-to-b from-secondary to-accent" > -->
<div class="relative bg-gradient-to-b from-base-100 to-base-300">
	<About />
</div>
<!-- </div> -->
<Footer />
