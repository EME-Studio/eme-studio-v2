<script type="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { ProjectOverview } from "$lib/types/project-overview.interface.ts";

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
        class:right-column={projects.indexOf(pro) % 2 != 0}
        class:low-opacity={current !== pro.title}
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

      @include mq("medium") {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 10rem;

        .low-opacity {
          opacity: 0.6;
          transition: opacity 1s;
        }

        .right-column {
          margin-top: 100px;
        }
      }
    }
  }
</style>
