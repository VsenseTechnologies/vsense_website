<script>
  import Button from "$lib/components/Button.svelte";
  const currentVersion = "2.0.0";
</script>

<section class="min-h-screen flex flex-col items-center relative overflow-hidden bg-black">
  <!-- Background gradient -->
  <div class="absolute inset-0 pointer-events-none bg-gradient-to-t to-black"></div>

  <!-- Logo -->
  <img 
  src="/images/logo.png" 
  alt="VSense Logo" 
  class="absolute left-14 sm:left-18 md:left-28 top-0 sm:top-0 md:top-14 w-38 sm:w-38 md:w-38 h-28 sm:h-32 md:h-40"
/>

  <!-- Main content -->
  <div class="container relative z-10">
    <!-- Main Section -->
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left side content -->
      <div class="space-y-8 text-white">
        <div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-24 sm:mt-24 md:mt-32 top-6">
            <span class="text-white">VSense</span> Biometric
          </h2>
          <p class="text-xl text-gray-400">
            Next-generation biometric authentication for the modern enterprise
          </p>
        </div>

        <!-- Button section -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <!-- Download Now Button -->
          <Button href="#download" variant="primary" className="w-full sm:w-auto">
            <span class="flex items-center gap-2">
              <span>Download Now</span>
              <span class="text-lg">↓</span>
            </span>
          </Button>

          <!-- Learn More Button -->
          <Button href="#features" variant="secondary" className="w-full sm:w-auto">
            <span class="flex items-center gap-2">
              <span>Learn More</span>
              <span class="text-lg">→</span>
            </span>
          </Button>
        </div>

        <!-- Info card -->
        <div class="glass-card p-6 space-y-2 bg-gray-800 bg-opacity-50 rounded-md">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-white"></div>
            <p class="text-sm text-gray-400">Latest Version:{currentVersion}</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-white"></div>
            <p class="text-sm text-gray-400">Windows Compatible</p>
          </div>
        </div>
      </div>

      <!-- Right side image -->
      <div class="relative text-center bottom-0">
        <div class="absolute inset-0 bg-gradient-to-t to-transparent z-18 pointer-events-none"></div>
        <img
          src="/images/biometric.png"
          alt="VSense Biometric Device"
          class="w-3/4 mx-auto max-w-sm relative z-0 bottom-8 unboxing-glow"
        />
        
        <!-- Product Name -->
        <div class="relative mt-2 bottom-20">
          <h3 class="text-5xl font-extrabold text-center text-white ">
            V-Metrics
          </h3>
          <p class="text-lg text-center text-gray-400 mt-2">
            The Future of Biometric Performance
          </p>
        </div>
      </div>
    </div>
  </div>

  <style>
    /* Glow effect for text */
    .glow-text {
      color: white;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 
                   0 0 20px rgba(255, 255, 255, 0.3),
                   0 0 30px rgba(255, 255, 255, 0.2);
      animation: textGlow 2s infinite alternate;
    }
  
    @keyframes textGlow {
      0% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                     0 0 10px rgba(255, 255, 255, 0.3);
      }
      100% {
        text-shadow: 0 0 15px rgba(255, 255, 255, 1),
                     0 0 30px rgba(255, 255, 255, 0.8);
      }
    }

    /* Glow animation for image */
    @keyframes unboxingEffect {
      0% {
        filter: brightness(0) blur(20px);
        opacity: 0;
      }
      50% {
        filter: brightness(0.5) blur(10px);
        opacity: 0.7;
      }
      100% {
        filter: brightness(1) blur(0px);
        opacity: 1;
      }
    }

    
    /* Card styling */
    .glass-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(1px);
      border-radius: 8px;
    }
  </style>
</section>
