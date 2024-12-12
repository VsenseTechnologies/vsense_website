<script>
	export let src;
	export let alt;
</script>

<div class="relative w-32 h-32 mb-4 flex-shrink-0">
	<div 
		class="absolute inset-0 rounded-full bg-gradient-to-r transition-opacity duration-300"
	></div>
	<img
		{src}
		{alt}
		class="w-full h-full object-cover rounded-full border-2 border-zinc-800 group-hover:border-green-500 transition-colors duration-300"
	/>
</div>