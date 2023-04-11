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
<div class="max-lg:bg-gradient-to-b from-secondary to-primary-focus">
	<section id="home" class="relative lg:bg-gradient-to-b lg:from-secondary-focus lg:to-primary">
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
			<div
				class="hero-content w-screen flex-col lg:flex-row-reverse justify-between max-w-[1240px] p-[2rem]"
			>
				<!-- <div> -->
				<img
					alt="propic one"
					src={propic1}
					class="max-w-sm drop-shadow-2xl justify-self-end max-lg:p-[2rem]"
				/>
				<!-- </div> -->
				<div class="max-w-md drop-shadow-2x">
					<h1 class="mb-5 text-5xl font-bold max-lg:text-center">Hello, world! I'm Luca</h1>
					<p class="mb-5 text-lg text-justify">
						Young passionate full-stack and software developer, but there's more... Scroll down to
						know more about me!
					</p>
					<div class="flex justify-between">
						<button class="btn btn-info lg:justify-self-start" on:click={() => scrollDown('home')}
							>Let's go</button
						>
						<a href="https://www.linkedin.com/in/luca-greggio-29386b221/" class="justify-self-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
								/>
							</svg>
						</a>
						<a href="https://www.github.com/cedrata/" class="justify-self-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								fill="currentColor"
								viewBox="0 0 98 98"
							>
								<path
									d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="about"
		class="relative flex items-center justify-center lg:bg-gradient-to-b lg:from-primary-focus lg:to-secondary-focus min-h-screen lg:max-h-screen"
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
			class="z-10 max-lg:flex max-lg:items-center lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-[1rem] max-md:flex-col lg:place-items-center lg:h-screen max-lg:max-w-md max-w-[77.5rem] p-[2rem]"
		>
			<div class="lg:col-start-1 lg:row-start-1 lg:row-span-2 text-lg">
				<h3 class="text-3xl font-bold mb-5 max-lg:text-center">About me</h3>
				<p class="text-lg text-justify">
					I’m a young and passionate developer having a blast in learning whatever I can about
					coding and trying to be a better programmer everyday. One of my greatest passion is
					playing guitar, growing up the I’ve started making my own music and got interested in
					audio DSP, especially understanding how to create my own audio plug-ins. Currently
					starting my own plug-in development project to create and provide free and open source
					products. Other than that I’ve always been interested in backend development and currently
					started to learn more about frontend as well and for this precise reason are reading this
					portfolio, it’s my attempt to learn more about.
				</p>
			</div>
			<div class="lg:col-start-2 lg:row-start-2 lg:row-span-2 max-lg:hidden">
				<img src={assets + '/images/keyboard.jpeg'} alt="the tools" class="shadow-2xl" />
			</div>
		</div>
	</section>
	<section
		id="experience"
		class="relative flex items-center justify-center lg:bg-gradient-to-b lg:from-primary-focus lg:to-secondary-focus min-h-screen lg:max-h-screen"
	>
		<div
			class="z-10 max-lg:flex max-lg:flex-col max-lg:items-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-[1rem] max-md:flex-col lg:place-items-center lg:max-h-screen max-lg:max-w-md max-w-[77.5rem] p-[2rem]"
		>
			<div class="lg:col-start-2 lg:row-start-1 text-lg max-lg:mb-[1rem]">
				<h3 class="text-3xl font-bold mb-5 max-lg:text-center ">My experience</h3>
				<p class="text-lg text-justify">
					My first work experience has been an introduction to the real world of software
					development learning the usage of some design patterns in real scenarios like the
					dependency injection, learning more about C# and native applications development creating
					internal tools with WPF and maintaining the code base to handle clients digital billing
					workflows. Later on I moved to my current team as a software IoT cloud developer for in
					energy utilities field where my journey learning and using AWS started, and mastering new
					tech like containerization (docker), CICD pipelines and more.
				</p>
			</div>
			<div class="lg:col-start-1 lg:row-start-1 text-lg w-full">
				<div class="mb-[1rem] max-lg:flex max-lg:items-center">
					<p class="w-1/3">AWS</p>
					<progress class="progress progress-accent lg:w-1/2 w-2/3" value="60" max="100" />
				</div>
				<div class="mb-[1rem] max-lg:flex max-lg:items-center">
					<p class="w-1/3">Python</p>
					<progress class="progress progress-accent lg:w-1/2 w-2/3" value="80" max="100" />
				</div>
				<div class="mb-[1rem] max-lg:flex max-lg:items-center">
					<p class="w-1/3">C++</p>
					<progress class="progress progress-accent lg:w-1/2 w-2/3" value="70" max="100" />
				</div>
				<div class="mb-[1rem] max-lg:flex max-lg:items-center">
					<p class="w-1/3">REST API</p>
					<progress class="progress progress-accent lg:w-1/2 w-2/3" value="75" max="100" />
				</div>
				<div class="mb-[1rem] max-lg:flex max-lg:items-center">
					<p class="w-1/3">Backend</p>
					<progress class="progress progress-accent lg:w-1/2 w-2/3" value="65" max="100" />
				</div>
				<div class="mb-[1rem] max-lg:flex max-lg:items-center">
					<p class="w-1/3">Frontend</p>
					<progress class="progress progress-accent lg:w-1/2 w-2/3" value="50" max="100" />
				</div>
			</div>
		</div>
	</section>
</div>
<Footer />
