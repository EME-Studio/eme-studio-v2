<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../lib/styles/app.scss";
  import FormSection from "./sections/FormSection.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<FormSection />
<Footer />
