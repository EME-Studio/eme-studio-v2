<script lang="ts">
  export let data;
</script>

<section class="container">
  <div class="project-resumee">
    <div class="title">
      <h1 class="display-large on-background-text">{data.title}</h1>
      <h4 class="on-background-text">{data.date}</h4>
      <p class="on-background-text">{data.excerpt}</p>
    </div>
    <img src={data.videolink} alt="example" />
  </div>
  <article>
    <svelte:component this={data.content} />
  </article>
</section>

<style lang="scss">
  .container {
    .project-resumee {
      @include mq("medium") {
        display: flex;
        flex-direction: row;
        gap: 6rem;
        align-items: center;
        justify-content: center;
      }

      img {
        border-radius: 0.8rem;
        width: 100%;
      }

      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    h1,
    p {
      overflow-wrap: break-word;
    }
  }
</style>
