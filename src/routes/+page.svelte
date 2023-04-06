<script>
	import Footer from '$lib/components/layout/footer.svelte';
	import { assets } from '$app/paths';

	/** @type {string} */
	const propic1 = assets + '/images/serious.jpeg';

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
			class="fill-primary-focus"
			fill-opacity="1"
			d="M0,96L60,80C120,64,240,32,360,53.3C480,75,600,149,720,186.7C840,224,960,224,1080,240C1200,256,1320,288,1380,304L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
		/></svg
	>
	<div class="hero lg:h-screen min-h-screen">
		<div class="hero-content w-screen flex-col lg:flex-row-reverse justify-between max-w-[1240px]">
			<div>
				<img alt="propic one" src={propic1} class="max-w-sm drop-shadow-2xl px-[1rem]" />
			</div>
			<div class="max-w-md drop-shadow-2x">
				<h1 class="mb-5 text-5xl font-bold">Hello, world! I'm Luca</h1>
				<p class="mb-5 text-lg text-justify">
					Young passionate full-stack and software developer, but there's more... Scroll down to
					know more about me!
				</p>
				<button class="btn btn-info" on:click={() => scrollDown('home')}>Let's go</button>
			</div>
		</div>
	</div>
</section>
<!-- </div> -->
<!-- <div class="bg-base-200 bg-gradient-to-b from-secondary to-accent" > -->
<section
	id="about"
	class="relative flex items-center justify-center bg-gradient-to-b from-primary to-primary-focus lg:from-primary-focus lg:to-secondary-focus"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		class="absolute bottom-0 max-lg:hidden"
		style="transform: scale(-1,1);"
		><path
			class="fill-primary-focus"
			fill-opacity="1"
			d="M0,96L60,80C120,64,240,32,360,53.3C480,75,600,149,720,186.7C840,224,960,224,1080,240C1200,256,1320,288,1380,304L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
		/></svg
	>
	<div
		class="z-10 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-[1rem] max-md:flex-col lg:place-items-center max-w-[1240px] min-h-screen lg:max-h-screen p-[1rem]"
	>
		<div class="lg:col-start-1 lg:row-start-1 lg:row-span-2 text-lg">
			<h3 class="text-3xl font-bold mb-5">About me</h3>
			<p class="text-lg text-justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis.
				Quisque egestas diam in arcu cursus euismod quis viverra. Adipiscing at in tellus integer
				feugiat scelerisque. Cum sociis natoque penatibus et magnis dis parturient montes. Donec
				enim diam vulputate ut pharetra sit amet aliquam. Massa ultricies mi quis hendrerit. Tortor
				pretium viverra suspendisse potenti nullam ac tortor vitae purus. Aliquam etiam erat velit
				scelerisque in dictum non consectetur a. Et netus et malesuada fames ac.
			</p>
		</div>
		<div class="lg:col-start-2 lg:row-start-2 lg:row-span-2 max-lg:hidden">
			<img src={assets + '/images/keyboard.jpeg'} alt="the tools" class="shadow-2xl"/>
		</div>
	</div>
</section>
<Footer />
