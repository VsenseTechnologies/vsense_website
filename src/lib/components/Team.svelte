<script>
	import { fade, fly } from 'svelte/transition';
	import { team } from '$lib/data/team.js';
	import TeamMemberCard from './team/TeamMemberCard.svelte';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section class="py-20 bg-zinc-900/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionTitle title="Our Team" />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each team as member, i}
				<div in:fly={{ y: 50, duration: 500, delay: i * 100 }}>
					<TeamMemberCard {member} />
				</div>
			{/each}
		</div>
	</div>
</section>