<script>
  import OurServices from './atoms/OurServices.svelte';
  import OurTools from './atoms/OurTools.svelte';
</script>

<section class="container">
  <OurServices />
  <OurTools />
</section>

<style type="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
</style>
