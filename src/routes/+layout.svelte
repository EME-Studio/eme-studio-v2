<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import '../lib/styles/app.scss';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
