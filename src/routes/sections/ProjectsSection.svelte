<script type="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { ProjectOverview } from "$lib/interface/projectOverview.interface";

  export let projects: ProjectOverview[];
</script>

<section class="container">
  <h4 class="headline-large on-background-text">
    lets let the work<br />
    do the talking
  </h4>
  <div class="project-cards-wrapper">
    {#each projects as pro}
      <ProjectCard projectOverview={pro} />
    {/each}
  </div>
</section>

<style type="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    .project-cards-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      @include mq("medium") {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8rem 10rem;
      }
    }
  }
</style>
