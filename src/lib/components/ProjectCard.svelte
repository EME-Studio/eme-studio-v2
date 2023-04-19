<script type="ts">
  import type { ProjectOverview } from "$lib/interface/projectOverview.interface";

  export let projectOverview: ProjectOverview;
</script>

<a href="/catalog/{projectOverview.url}">
  <div class="main-wrapper card">
    <h3 class="headline-medium primary-text">{projectOverview.title}</h3>
    <h4 class="headline-small on-background-text">{projectOverview.year}</h4>
    <img src={projectOverview.img} alt={projectOverview.title} />
    <div class="tags-wrapper">
      {#each projectOverview.tags as tag}
        <span class="primary-text">{tag}</span>
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

    span {
      border: var(--md-sys-color-primary) 1px solid;
      border-radius: 0.8rem;
      padding: 0.4rem;
    }
  }
</style>
