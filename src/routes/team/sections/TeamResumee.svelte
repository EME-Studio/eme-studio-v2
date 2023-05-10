<script type="ts">
  import Video from "$lib/components/Video.svelte";
</script>

<section class="container-small content-wrapper">
  <div class="title-wrapper">
    <h3 class="display-medium on-background-text">This is us</h3>
    <p class="body-large on-background-text">
      Experience the perfect fusion of striking design and advanced technology
      by partnering with our web development company. Together, we can bring
      your digital presence to new heights.
    </p>
  </div>
  <Video url="/images/videoExample.mov" />
</section>

<style lang="scss">
  .content-wrapper {
    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      text-align: center;
      padding: 3rem;
    }
  }
</style>
