<script>
  // @ts-nocheck
  
    import Button from '$lib/components/Button.svelte';
    
    const currentVersion = "2.0.0";
    const downloadUrl = "/downloads/biometric.exe";
    
    const specs = [
      "Windows 10/11 Compatible",
      "Automatic Updates",
      "Cloud Backup",
      "24/7 Support"
    ];
  </script>
  
  <section id="download" class="section relative">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),rgba(0,0,0,0))]"></div>
    <div class="container relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-white mb-4">Download Now</h2>
        <p class="text-xl text-gray-300 mb-8">Get started with VSense Biometric by downloading our Windows application</p>
        
        <div class="glass-card p-8 mb-8 bg-gray-800 border border-gray-600">
          <div class="flex items-center justify-center gap-4 mb-8">
            <div class="h-16 w-16 rounded-full bg-gray-600/30 flex items-center justify-center">
              <span class="text-2xl text-white">💻</span>
            </div>
            <div class="text-left">
              <h3 class="text-2xl font-bold text-white mb-1">VSense Biometric</h3>
              <p class="text-gray-300">Version {currentVersion}</p>
            </div>
          </div>
          <Button href={downloadUrl} variant="primary" class="w-full sm:w-auto bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
            <span class="flex items-center gap-2">
              <span>Download for Windows</span>
              <span class="text-lg">⬇</span>
            </span>
          </Button>
        </div>
        
        <div class="grid sm:grid-cols-2 gap-4">
          {#each specs as spec}
            <div class="glass-card p-4 flex items-center gap-2 bg-gray-800 border border-gray-600">
              <div class="w-2 h-2 rounded-full bg-gray-500"></div>
              <span class="text-gray-300">{spec}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  