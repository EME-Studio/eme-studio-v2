<script type="ts">
  import Card from "$lib/components/Card.svelte";
  import type { ProjectOverview } from "$lib/interface/projectOverview.interface";

  export let projects: ProjectOverview[];
</script>

<section>
  <div class="container">
    <div class="title-wrapper">
      <h2 class="headline-large">
        <span class="color-variant">lets let</span> the<span
          class="color-variant">.</span
        >work<br /><span class="color-variant">do the</span> talking
      </h2>
    </div>
    <div class="projects-wrapper">
      {#each projects as pro}
        <div class="individual-project">
          <Card projectOverview={pro} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style type="scss">
  .title-wrapper {
    padding-bottom: 3em;
  }

  .headline-large {
    font-weight: bold;
  }

  .color-variant {
    color: var(--md-sys-color-on-primary-light);
  }
  .projects-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3em;
  }
</style>
