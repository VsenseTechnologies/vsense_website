<script>
	// @ts-ignore
	import { slide } from 'svelte/transition';
	
	let isMenuOpen = false;
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-black border-b border-zinc-800 fixed w-full z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex items-center ">
				<img src="/images/logo3.png" alt="VSense Technologies" class="h-16" />


				<span class="text-lg md:text-xl font-thin text-white font-sans">V S E N S E</span>
			</div>
			
			<div class="hidden md:flex items-center space-x-6 lg:space-x-8">
				<a href="/" class="text-sm lg:text-base text-white hover:text-green-500 transition-colors">Home</a>
				<a href="#services" class="text-sm lg:text-base text-white hover:text-green-500 transition-colors">Services</a>
				<a href="#projects" class="text-sm lg:text-base text-white hover:text-green-500 transition-colors">Projects</a>
				<a href="#downloads" class="text-sm lg:text-base text-white hover:text-green-500 transition-colors">Downloads</a>
				<a href="#about" class="text-sm lg:text-base text-white hover:text-green-500 transition-colors">About</a>
				<a href="#contact" class="btn-primary text-sm lg:text-base">Contact Us</a>
			</div>
			
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="md:hidden p-2" on:click={toggleMenu} aria-label="Toggle menu">

				<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
				</svg>
			</button>
		</div>
	</div>
	
	{#if isMenuOpen}
	<div class="md:hidden bg-zinc-900 border-t border-zinc-800" transition:slide>
		<div class="px-2 pt-2 pb-3 space-y-1">
			<a href="/" class="block px-3 py-2 text-white hover:bg-green-500 rounded-md" on:click={() => isMenuOpen = false}>Home</a>
			<a href="#services" class="block px-3 py-2 text-white hover:bg-green-500 rounded-md" on:click={() => isMenuOpen = false}>Services</a>
			<a href="#projects" class="block px-3 py-2 text-white hover:bg-green-500 rounded-md" on:click={() => isMenuOpen = false}>Projects</a>
			<a href="#about" class="block px-3 py-2 text-white hover:bg-green-500 rounded-md" on:click={() => isMenuOpen = false}>About</a>
			<a href="#contact" class="block px-3 py-2 text-white hover:bg-green-500 rounded-md" on:click={() => isMenuOpen = false}>Contact</a>
		</div>
	</div>
	{/if}
</nav>