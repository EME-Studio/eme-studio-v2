<script type="ts">
  import type { ProjectOverview } from "$lib/interface/projectOverview.interface";

  export let projectOverview: ProjectOverview;
</script>

<div class="project-wrapper">
  <h3 class="title-large on-primary-text">{projectOverview.title}</h3>
  <h4 class="title-medium on-primary-text">{projectOverview.year}</h4>
  <div class="img-wrapper">
    <img src={projectOverview.img} alt={projectOverview.title} />
  </div>

  <div class="tags">
    {#each projectOverview.tag as tag}
      <div class="tags-wrapper"><p class="on-primary-text">{tag} |</p></div>
    {/each}
  </div>

  <div class="line" />

  <p class="on-primary-text">{projectOverview.excerpt}</p>
</div>

<style type="scss">
  .tags {
    // display: flex;
  }
  img {
    width: 380px;
    height: 300px;
  }
  p {
    width: 350px;
    vertical-align: middle;
  }
  .img-wrapper {
    width: 300px;
  }
  .line {
    border-top: 2px solid;
    width: 20%;
  }
  .project-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  h3,
  h4,
  img,
  p,
  .line {
    padding-bottom: 0.3em;
  }
</style>
