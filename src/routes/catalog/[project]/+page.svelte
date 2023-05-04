<script lang="ts">
  import ProjectCategoryTag from "$lib/components/ProjectCategoryTag.svelte";

  export let data;
  console.log(data);
</script>

<section>
  <div class="container-small">
    <div class="title">
      <h1 class="display-large on-background-text">{data.metadata.title}</h1>
      <h4 class="on-background-text">{data.metadata.date}</h4>
      <div class="tags-wrapper">
        {#each data.metadata.tags as tag}
          <ProjectCategoryTag title={tag} />
        {/each}
      </div>
      <p class="on-background-text">{data.metadata.excerpt}</p>
    </div>
  </div>
</section>
<section>
  <img src={data.metadata.videolink} alt="example" />
  <article>
    <div class="container-small">
      <svelte:component this={data.content} />
    </div>
  </article>
</section>

<style lang="scss">
  .container-small {
    padding: 2rem;

    .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: center;

      .tags-wrapper {
        display: flex;
        flex-direction: row;
        gap: 1.4rem;
        justify-content: center;
      }

      p {
        overflow-wrap: break-word;
      }
    }
  }

  img {
    width: 100%;
    max-height: 60rem;
  }
</style>
