<script>
	import { projects } from '$lib/data/projects.js';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
</script>

<section id="projects" class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="section-title">Featured Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div 
					class="card group cursor-pointer transform transition-all duration-300 hover:scale-105"
					on:click={() => goto(`/projects/${project.id}`)}
					in:fly={{ y: 50, duration: 500 }}
				>
					<div class="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"></div>
					<div class="flex justify-between items-start mb-4">
						<h3 class="text-xl font-bold group-hover:text-green-500 transition-colors">{project.title}</h3>
						<span class="text-green-500">{project.year}</span>
					</div>
					<p class="text-zinc-400 mb-4">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="px-3 py-1 bg-zinc-800 rounded-full text-sm group-hover:bg-green-500/10 transition-colors">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>