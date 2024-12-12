<script>
	export let name;
	export let role;
	export let description;
</script>

<div class="flex flex-col flex-grow min-h-0">
	<h3 class="text-xl font-bold mb-1 text-white group-hover:text-green-500 transition-colors">
		{name}
	</h3>
	<p class="text-green-500 font-medium mb-3">{role}</p>
	<div class="flex-1 overflow-y-auto custom-scrollbar">
		<p class="text-zinc-400 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
			{description}
		</p>
	</div>
</div>

<style>
	.custom-scrollbar {
		scrollbar-width: thin;
		scrollbar-color: rgba(74, 222, 128, 0.2) transparent;
	}
	
	.custom-scrollbar::-webkit-scrollbar {
		width: 4px;
	}
	
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background-color: rgba(74, 222, 128, 0.2);
		border-radius: 2px;
	}
</style>