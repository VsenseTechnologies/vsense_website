<script>
	import { downloads } from '$lib/data/downloads.js';
	import { fade, fly } from 'svelte/transition';
	import SectionTitle from './SectionTitle.svelte';
	import { downloadFile } from '$lib/utils/download.js';

	let downloading = false;
	let error = '';
	/**
	 * @type {{ name: string; description: string; version: string; size: string; platform: string; fileUrl: string; icon: string; requirements: string; features: string[]; } | null}
	 */
	let currentSoftware = null;

	/**
	 * @param {{ name: string; description: string; version: string; size: string; platform: string; fileUrl: string; icon: string; requirements: string; features: string[]; } | null} software
	 */
	async function handleDownload(software) {
		if (downloading) return;
		
		try {
			downloading = true;
			currentSoftware = software;
			error = '';
			// @ts-ignore
			await downloadFile(software.fileUrl);
		} catch (err) {
			// @ts-ignore
			error = err.message || 'Download failed. Please try again later.';
		} finally {
			downloading = false;
			currentSoftware = null;
		}
	}
</script>

<section id="downloads" class="py-20 bg-zinc-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionTitle title="Downloads" />
		
		{#if error}
			<div class="mb-6 bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 rounded-md">
				{error}
			</div>
		{/if}
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<!-- Software Downloads -->
			<div class="space-y-6" in:fly={{ x: -50, duration: 500 }}>
				<h3 class="text-2xl font-bold">Software</h3>
				{#each downloads.software as software}
					<div class="card group hover:border hover:border-green-500/20">
						<div class="flex items-start gap-4">
							<div class="text-4xl">{software.icon}</div>
							<div class="flex-1">
								<h4 class="text-xl font-semibold mb-2">{software.name}</h4>
								<p class="text-zinc-400 mb-4">{software.description}</p>
								
								<div class="flex flex-wrap gap-4 text-sm text-zinc-500 mb-4">
									<span class="flex items-center gap-1">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
										</svg>
										Version {software.version}
									</span>
									<span class="flex items-center gap-1">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
										</svg>
										{software.size}
									</span>
									<span class="flex items-center gap-1">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										{software.platform}
									</span>
								</div>

								<div class="mb-4">
									<h5 class="font-medium mb-2">Features:</h5>
									<ul class="space-y-1">
										{#each software.features as feature}
											<li class="flex items-start text-zinc-400 text-sm">
												<span class="text-green-500 mr-2 mt-1">✓</span>
												{feature}
											</li>
										{/each}
									</ul>
								</div>
								
								<button
									class="btn-primary w-full relative overflow-hidden"
									on:click={() => handleDownload(software)}
									disabled={downloading}
								>
									{#if downloading && currentSoftware === software}
										<div class="absolute inset-0 flex items-center justify-center bg-green-500">
											<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
												<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
										</div>
									{/if}
									<span class={downloading && currentSoftware === software ? 'opacity-0' : ''}>
										Download for {software.platform}
									</span>
								</button>
								<p class="mt-2 text-sm text-zinc-500">System Requirements: {software.requirements}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Mobile Apps -->
			<div class="space-y-6" in:fly={{ x: 50, duration: 500 }}>
				<h3 class="text-2xl font-bold">Mobile Apps</h3>
				{#each downloads.mobileApps as app}
					<div class="card group hover:border hover:border-green-500/20">
						<div class="flex items-start gap-4">
							<div class="text-4xl">{app.icon}</div>
							<div class="flex-1">
								<h4 class="text-xl font-semibold mb-2">{app.name}</h4>
								<p class="text-zinc-400 mb-4">{app.description}</p>
								
								<div class="flex flex-wrap gap-4 text-sm text-zinc-500 mb-4">
									<span class="flex items-center gap-1">Version {app.version}</span>
									<span class="flex items-center gap-1">{app.platform}</span>
								</div>
								
								<div class="mb-4">
									<h5 class="font-medium mb-2">Features:</h5>
									<ul class="space-y-1">
										{#each app.features as feature}
											<li class="flex items-start text-zinc-400 text-sm">
												<span class="text-green-500 mr-2 mt-1">✓</span>
												{feature}
											</li>
										{/each}
									</ul>
								</div>
								
								<a
									href={app.playStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="btn-primary w-full flex items-center justify-center gap-2"
								>
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
										<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
									</svg>
									Get it on Google Play
								</a>
								<p class="mt-2 text-sm text-zinc-500">Requirements: {app.requirements}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>