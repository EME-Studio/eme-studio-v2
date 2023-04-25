<script type="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { ProjectOverview } from "$lib/types/project-overview.interface";

  export let projects: ProjectOverview[];
  let totalProjects = projects.length;
</script>

<section class="container">
  <h4 class="headline-large on-background-text">
    lets let the work<br />
    do the talking
  </h4>
  <div class="project-cards-wrapper">
    {#each projects as pro}
      <div class:right-column={projects.indexOf(pro) % 2 != 0}>
        <ProjectCard projectOverview={pro} />
      </div>
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
        gap: 0 10rem;

        .right-column {
          margin-top: 100px;
        }
      }
    }
  }
</style>
