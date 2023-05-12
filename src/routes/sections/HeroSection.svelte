<script>
  import Orbits from "$lib/components/Orbits.svelte";
</script>

<section class="container-small">
  <h1 class="display-large on-background-text">
    We develop<br />websites for the <br />21st century
  </h1>

  <p class="on-background-text">
    We specialize in designing and developing cutting-edge websites. We deliver
    holistic solutions, combining visually stunning designs with the latest web
    technologies.
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
