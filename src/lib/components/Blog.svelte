<!-- <script>
	import { blogPosts } from '$lib/data/blog-posts.js';
	import BlogCard from './BlogCard.svelte';
	import Newsletter from './Newsletter.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import { fade, fly } from 'svelte/transition';

	let selectedCategory = 'all';
	$: filteredPosts = selectedCategory === 'all' 
		? blogPosts 
		: blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

	const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
</script>

<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
			<SectionTitle title="Latest Insights" />
			
			<div class="flex flex-wrap gap-2 mt-6 md:mt-0">
				{#each categories as category}
					<button
						class="px-4 py-2 rounded-full text-sm transition-all duration-300 {selectedCategory === category.toLowerCase() ? 'bg-green-500 text-white' : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700'}"
						on:click={() => selectedCategory = category.toLowerCase()}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
			{#each filteredPosts as post, i}
				<div in:fly={{ y: 50, duration: 500, delay: i * 100 }}>
					<BlogCard {post} />
				</div>
			{/each}
		</div>
		
		<div in:fly={{ y: 50, duration: 500 }}>
			<Newsletter />
		</div>
	</div>
</section> -->