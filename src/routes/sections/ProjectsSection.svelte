<script type="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { ProjectOverview } from "src/lib/types/project-overview.interface.ts";

  export let projects: ProjectOverview[];

  let current = projects[0].title;
</script>

<section class="container">
  <h4 class="headline-large on-background-text">
    lets let the work<br />
    do the talking
  </h4>
  <div class="project-cards-wrapper">
    {#each projects as pro}
      <div
        class="{current === pro.title ? 'selected' : ''}project-card"
        on:pointerover={() => (current = pro.title)}
      >
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

      .selectedproject-card {
        opacity: 1;
      }

      .project-card {
        opacity: 0.6;
        transition: opacity 1s;
      }

      @include mq("medium") {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8rem 10rem;
      }
    }
  }
</style>
