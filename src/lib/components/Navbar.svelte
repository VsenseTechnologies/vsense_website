<script>
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
	let isMenuOpen = false;
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleNavigation(event, target) {
		event.preventDefault();
		
		if ($page.url.pathname !== '/') {
			goto('/')
				.then(() => {
					setTimeout(() => {
						const element = document.querySelector(target);
						if (element) {
							element.scrollIntoView({ behavior: 'smooth' });
						}
					}, 100);
				});
		} else {
			const element = document.querySelector(target);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
		
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	}
</script>

<nav class="bg-black border-b border-zinc-800 fixed w-full z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex items-center space-x-3">
				<img src="/images/1737903665523.jpeg" alt="Vithsutra Technologies" class="h-16" />

				<span class="text-lg md:text-xl font-bold text-white">VSense Technologies</span>
			</div>
			
			<div class="hidden md:flex items-center space-x-6 lg:space-x-8">
				<a 
					href="/" 
					on:click|preventDefault={() => goto('/')}
					class="text-sm lg:text-base text-white hover:text-green-500 transition-colors"
				>
					Home
				</a>
				<a 
					href="#services" 
					on:click={(e) => handleNavigation(e, '#services')}
					class="text-sm lg:text-base text-white hover:text-green-500 transition-colors"
				>
					Services
				</a>
				<a 
					href="#projects" 
					on:click={(e) => handleNavigation(e, '#projects')}
					class="text-sm lg:text-base text-white hover:text-green-500 transition-colors"
				>
					Projects
				</a>
				<a 
					href="#downloads" 
					on:click={(e) => handleNavigation(e, '#downloads')}
					class="text-sm lg:text-base text-white hover:text-green-500 transition-colors"
				>
					Downloads
				</a>
				<a 
					href="#about" 
					on:click={(e) => handleNavigation(e, '#about')}
					class="text-sm lg:text-base text-white hover:text-green-500 transition-colors"
				>
					About
				</a>
				<a 
					href="#contact" 
					on:click={(e) => handleNavigation(e, '#contact')}
					class="btn-primary text-sm lg:text-base"
				>
					Contact Us
				</a>
			</div>
			
			<button class="md:hidden p-2" on:click={toggleMenu}>
				<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
				</svg>
			</button>
		</div>
	</div>
	
	{#if isMenuOpen}
	<div class="md:hidden bg-zinc-900 border-t border-zinc-800" transition:slide>
		<div class="px-2 pt-2 pb-3 space-y-1">
			<a 
				href="/" 
				on:click|preventDefault={() => {
					goto('/');
					isMenuOpen = false;
				}}
				class="block px-3 py-2 text-white hover:bg-green-500 rounded-md"
			>
				Home
			</a>
			<a 
				href="#services" 
				on:click={(e) => handleNavigation(e, '#services')}
				class="block px-3 py-2 text-white hover:bg-green-500 rounded-md"
			>
				Services
			</a>
			<a 
				href="#projects" 
				on:click={(e) => handleNavigation(e, '#projects')}
				class="block px-3 py-2 text-white hover:bg-green-500 rounded-md"
			>
				Projects
			</a>
			<a 
				href="#downloads" 
				on:click={(e) => handleNavigation(e, '#downloads')}
				class="block px-3 py-2 text-white hover:bg-green-500 rounded-md"
			>
				Downloads
			</a>
			<a 
				href="#about" 
				on:click={(e) => handleNavigation(e, '#about')}
				class="block px-3 py-2 text-white hover:bg-green-500 rounded-md"
			>
				About
			</a>
			<a 
				href="#contact" 
				on:click={(e) => handleNavigation(e, '#contact')}
				class="block px-3 py-2 text-white hover:bg-green-500 rounded-md"
			>
				Contact
			</a>
		</div>
	</div>
	{/if}
</nav>