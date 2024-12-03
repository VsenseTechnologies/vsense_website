<script>
    // @ts-nocheck
    export let href = undefined; // Link for anchor tag
    export let type = "button"; // Default button type
    export let variant = "primary"; // Style variant: "primary" or "secondary"
    export let className = ""; // Additional classes
    export let disabled = false; // Disabled state
  
    // Base styles and variant-specific styles
    const baseStyles =
      "px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center";
    const variants = {
      primary: "bg-gradient-to-r from-green-400 to-emerald-400 text-black hover:opacity-90",
      secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
    };
  </script>
  
  {#if href}
    <a
      href={href}
      class={`${baseStyles} ${variants[variant]} ${className}`}
      aria-disabled={disabled ? "true" : "false"}
      class:opacity-50={disabled}
      class:pointer-events-none={disabled} 
    >
      <slot />
    </a>
  {:else}
    <button
      type={type}
      class={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      aria-disabled={disabled ? "true" : "false"}
      class:opacity-50={disabled}
      class:pointer-events-none={disabled} 
    >
      <slot />
    </button>
  {/if}