<script>
  import Orbits from "$lib/components/Orbits.svelte";
</script>

<section class="container-small">
  <h1 class="display-large on-background-text">
    We develop<br />websites for the <br />21st century
  </h1>

  <p class="on-background-text">
    NuxtLabs is the bridge between open-source software development and
    enterprise-grade web services. We provide a complete set of solutions to
    every company that wants to harness the full power of Vue and Nuxt.
  </p>

  <Orbits />
</section>

<style type="scss">
  .container-small {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1,
    p {
      overflow-wrap: break-word;
    }
  }
</style>
