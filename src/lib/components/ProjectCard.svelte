<script type="ts" src="https://player.vimeo.com/api/player.js">
  import type { ProjectOverview } from "$lib/types/project-overview.interface";
  import CategoryTag from "./CategoryTag.svelte";
  export let projectOverview: ProjectOverview;
</script>

<a href="/catalog/{projectOverview.url}">
  <div class="main-wrapper card">
    <h3 class="headline-small primary-text">{projectOverview.title}</h3>
    <h4 class="body-large on-background-text">{projectOverview.year}</h4>
    <div class="img-wrapper">
      <img src={projectOverview.img} alt={projectOverview.title} />
    </div>
    <div class="tags-wrapper">
      {#each projectOverview.tags as tag}
        <CategoryTag title={tag} />
      {/each}
    </div>
    <p class="on-background-text">{projectOverview.excerpt}</p>
  </div>
</a>

<style type="scss">
  a {
    text-decoration: none;
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    .tags-wrapper {
      display: flex;
      flex-direction: row;
      gap: 1.4rem;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      -webkit-box-orient: vertical;
    }

    .img-wrapper {
      position: relative;

      img {
        width: 100%;
        border-radius: 0.5rem;
      }
    }
  }
</style>
