<script>
// @ts-nocheck

	import { projects } from '$lib/data/projects.js';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import ImageSlider from '$lib/components/projects/ImageSlider.svelte';
	
	$: project = projects.find(p => p.id === $page.params.id);
</script>

<svelte:head>
	<title>{project.title} - VSense Technologies</title>
</svelte:head>

<div class="pt-24 pb-16 min-h-screen" in:fade>
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<a 
			href="/#projects" 
			class="inline-flex items-center text-sm text-green-500 hover:text-green-400 mb-8 group"
		>
			<!-- <span class="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors mr-2">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
			</span>
			Back to Projects -->
		</a>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div in:fly={{ x: -50, duration: 500 }}>
				<h1 class="text-4xl font-bold mb-4">{project.title}</h1>
				<div class="flex flex-wrap gap-2 mb-6">
					{#each project.tags as tag}
						<span class="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
							{tag}
						</span>
					{/each}
				</div>
				<p class="text-zinc-300 mb-8">{project.fullDescription}</p>

				<div class="mb-8">
					<h2 class="text-2xl font-bold mb-4">Key Features</h2>
					<ul class="space-y-3">
						{#each project.features as feature}
							<li class="flex items-start text-zinc-300">
								<span class="text-green-500 mr-2 mt-1">✓</span>
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="mb-8">
					<h2 class="text-2xl font-bold mb-4">Technologies Used</h2>
					<div class="flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<span class="px-3 py-1 bg-zinc-800 rounded-full text-sm">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="space-y-8" in:fly={{ x: 50, duration: 500 }}>
				<div class=" rounded-xl ">
					<ImageSlider images={project.images} title={project.title} />
				</div>

				<div class="bg-zinc-900 rounded-lg p-6">
					<h2 class="text-2xl font-bold mb-4">Project Results</h2>
					<ul class="space-y-3">
						{#each project.results as result}
							<li class="flex items-start text-zinc-300">
								<span class="text-green-500 mr-2 mt-1">→</span>
								{result}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>