<script>
	export let member;
</script>

<div 
	class="relative bg-zinc-900 rounded-xl p-6 transition-all duration-300 hover:bg-zinc-800 hover:scale-105 hover:shadow-lg w-full h-[420px] flex flex-col"
>
	<div class="flex flex-col items-center text-center">
		<!-- Profile Image -->
		<div class="relative w-40 h-40 mb-6">
			<img
				src={member.image}
				alt={member.name}
				class="w-full h-full object-cover rounded-full border-2 border-zinc-800"
			/>
		</div>

		<!-- Name and Details Section -->
		<div class="rounded-xl p-4  w-full h-[120px] flex flex-col ">
			<h3 class="text-xl font-bold mb-1 text-white">
				{member.name}
			</h3>
			<p class="text-green-500 font-medium mb-4">{member.role}</p>
			<p class="text-zinc-400 text-sm mb-6 opacity-80">
				{member.description}
			</p>
		</div>

		<!-- Social Links -->
		<div class="flex space-x-4 p-3">
			<a
				href={member.social.linkedin}
				class="text-zinc-400 p-2 rounded-full hover:text-green-400 hover:bg-zinc-700"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="sr-only">LinkedIn</span>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
				</svg>
			</a>
			<a
				href={member.social.twitter}
				class="text-zinc-400 p-2 rounded-full hover:text-blue-400 hover:bg-zinc-700"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="sr-only">Twitter</span>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
				</svg>
			</a>
		</div>
	</div>
</div>
