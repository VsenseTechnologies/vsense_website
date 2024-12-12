<script>
	import TeamMemberImage from './TeamMemberImage.svelte';
	import TeamMemberInfo from './TeamMemberInfo.svelte';
	import TeamMemberSocial from './TeamMemberSocial.svelte';
	
	export let member;
</script>

<div 
	class="group relative bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-300 w-full h-[350px] flex flex-col"
>
	<div class="flex flex-col items-center text-center h-full">
		<TeamMemberImage 
			src={member.image} 
			alt={member.name} 
		/>
		
		<TeamMemberInfo 
			name={member.name}
			role={member.role}
			description={member.description}
		/>
		
		<TeamMemberSocial social={member.social} />
	</div>
</div>