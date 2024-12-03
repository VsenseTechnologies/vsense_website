<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Team from '$lib/components/Team.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Downloads from '$lib/components/Downloads.svelte';
</script>

<svelte:head>
	<title>VSense Technologies - Innovative Technology Solutions</title>
	<meta name="description" content="Leading provider of IoT, Robotics, Web Development, and Industrial Solutions" />
</svelte:head>

<div class="pt-16">
	<Hero />
	<Services />
	<Projects />
	<Downloads />
	<Team />
	<Blog />
	<About />
	<Contact />
</div>