<script>
	import { fade } from 'svelte/transition';
	export let post;
</script>

<article 
	class="card group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
	in:fade
>
	<div class="relative aspect-video mb-6 overflow-hidden rounded-lg">
		<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
		<img
			src={post.image}
			alt={post.title}
			class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
		/>
		<div class="absolute bottom-4 left-4 z-20">
			<span class="inline-block px-3 py-1 text-xs font-semibold bg-green-500/90 text-white rounded-full">
				{post.category}
			</span>
		</div>
	</div>

	<div class="flex flex-col h-[calc(100%-theme(spacing.6)-theme(spacing.48))]">
		<div class="mb-4 flex items-center space-x-4">
			<div class="flex items-center space-x-2">
				<img
					src={post.authorImage}
					alt={post.author}
					class="w-8 h-8 rounded-full border border-zinc-800"
				/>
				<div class="text-sm">
					<p class="text-white font-medium">{post.author}</p>
					<p class="text-zinc-500">{post.authorRole}</p>
				</div>
			</div>
			<span class="text-zinc-500 text-sm">•</span>
			<span class="text-zinc-500 text-sm">{post.readTime}</span>
		</div>
		
		<h3 class="text-xl font-bold mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
			{post.title}
		</h3>
		
		<p class="text-zinc-400 mb-6 line-clamp-3">
			{post.excerpt}
		</p>

		<div class="mt-auto flex flex-wrap gap-2">
			{#each post.tags as tag}
				<span class="px-2 py-1 text-xs bg-zinc-800/50 text-zinc-400 rounded-md">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</article>