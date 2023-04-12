<script type="ts">
  import type { ProjectOverview } from '$lib/interface/projectOverview.interface';

  export let projectOverview: ProjectOverview;
</script>

<div class="main-wrapper">
  <h3 class="title-large on-primary-text">{projectOverview.title}</h3>
  <h4 class="title-medium on-primary-text">{projectOverview.year}</h4>
  <img src={projectOverview.img} alt={projectOverview.title} />
  <div class="tags-wrapper">
    {#each projectOverview.tags as tag}
      <span class="tag-primary">{tag}</span>
    {/each}
  </div>
  <p class="on-primary-text">{projectOverview.excerpt}</p>
</div>

<style type="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }

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
  }
</style>
