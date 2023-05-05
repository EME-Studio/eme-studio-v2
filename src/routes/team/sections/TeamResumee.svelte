<script type="ts">
  import Video from "$lib/components/Video.svelte";
</script>

<section class="container-small content-wrapper">
  <div class="title-wrapper">
    <h3 class="display-medium on-background-text">
      A little piece of what we do
    </h3>
    <p class="body-large on-background-text">
      Loremo ipsum Loremo ipsum Loremo ipsum Loremo ipsum Loremo ipsum
    </p>
  </div>
  <Video url="/images/videoExample.mov" />
</section>

<style lang="scss">
  .content-wrapper {
    display: flex;
    flex-direction: column;

    .title-wrapper {
      text-align: center;
      padding: 3rem;
    }
  }
</style>
