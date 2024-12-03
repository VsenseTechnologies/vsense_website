<script>
	const services = [
		{
			title: 'IoT Solutions',
			description: 'Custom IoT solutions for smart manufacturing, monitoring, and automation.',
			icon: '🔌'
		},
		{
			title: 'Robotics',
			description: 'Advanced robotics solutions for industrial automation and process optimization.',
			icon: '🤖'
		},
		{
			title: 'Software Development',
			description: 'Responsive and scalable web applications built with modern technologies.',
			icon: '💻'
		},
		{
			title: 'PCB Design',
			description: 'Custom PCB design and development for specialized electronic applications.',
			icon: '🔧'
		},
		{
			title: 'Cloud Solutions',
			description: 'Scalable cloud infrastructure and services for modern businesses.',
			icon: '☁️'
		},
		{
			title: 'Training Programs',
			description: 'Comprehensive training and internship programs for aspiring technologists.',
			icon: '📚'
		}
	];
</script>

<section id="services" class="py-20 bg-zinc-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="section-title">Our Services</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<div class="card">
					<div class="text-4xl mb-4">{service.icon}</div>
					<h3 class="text-xl font-bold mb-2">{service.title}</h3>
					<p class="text-zinc-400">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>