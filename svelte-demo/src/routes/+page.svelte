<script lang="ts">
  // If nano-custom exposes a track function, use it; otherwise, leave it out
  let trackCTA = () => {
    if (typeof track === "function") track('CTA');
  };
</script>

<div class="logos">
  <img src="/svelte-logo.svg" alt="Svelte Logo" class="logo" width="80" height="80" />
  <img src="https://www.nanosights.dev/images/logo.svg" alt="NanoSights Logo" class="logo" width="80" height="80" />
</div>
<h1>SvelteKit + NanoSights</h1>
<p>This demo shows how NanoSights integrates with SvelteKit.</p>
<div class="buttons">
  <a
    class="button primary"
    href="https://www.nanosights.dev"
    target="_blank"
    on:click={trackCTA}
    >Go to NanoSights</a>
  <a class="button secondary" href="https://www.nanosights.dev/docs"
    >Documentation</a>
</div>
