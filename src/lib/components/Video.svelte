<script type="ts">
  export let url: string;
</script>

<div>
  <video src={url} muted loop autoplay>
    <track kind="captions" />
  </video>
</div>

<style lang="scss">
  div {
    position: relative;

    video {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
</style>
