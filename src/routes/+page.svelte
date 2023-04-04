<script>
	import About from '$lib/components/layout/about.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Home from '$lib/components/layout/home.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import { assets } from '$app/paths';

	/** @type {string} */
	const propic1 = assets + '/images/seriuos.jpeg';
</script>

<!-- <Navbar /> -->
<div class="relative bg-gradient-to-b from-secondary-focus to-primary">
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
	<Home id={'home'} {propic1} />
</div>
<!-- </div> -->
<!-- <div class="bg-base-200 bg-gradient-to-b from-secondary to-accent" > -->
<div class="relative bg-gradient-to-b from-base-100 to-base-300">
	<About />
</div>
<!-- </div> -->
<Footer />
