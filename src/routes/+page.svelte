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
	
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L34.3,293.3C68.6,299,137,309,206,304C274.3,299,343,277,411,229.3C480,181,549,107,617,96C685.7,85,754,139,823,160C891.4,181,960,171,1029,144C1097.1,117,1166,75,1234,53.3C1302.9,32,1371,32,1406,32L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
<div class="bg-base-200 bg-gradient-to-b from-primary to-secondary" >
	<Home id={"home"} {propic1}/>
</div>
<!-- <div class="bg-base-200 bg-gradient-to-b from-secondary to-accent" > -->
	<About />
<!-- </div> -->
<Footer />
