<script>
	import About from '$lib/components/layout/about.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Home from '$lib/components/layout/home.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import { assets } from '$app/paths';

	/** @type {string} */
	const propic1 = assets + '/images/seriuos.jpeg';
</script>

<div >
	<!-- <Navbar /> -->
	<Home id={"home"} {propic1}/>
	<About />
	<Footer />
</div>
