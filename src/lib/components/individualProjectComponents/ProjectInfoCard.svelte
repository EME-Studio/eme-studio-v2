<script type="ts">
  export let title: string;
  export let description: string;
  export let img: string;
  export let align: boolean = false;
</script>

<div class="main-wrapper">
  {#if align}
    <div>
      <h3 class="headline-small primary-text">{title}</h3>
      <h4 class="body-large on-background-text">{description}</h4>
    </div>
    <img src={img} alt={title} class="img-rounded" />
  {:else}
    <img src={img} alt={title} class="img-rounded" />
    <div class="center-aligned-text">
      <h3 class="headline-small primary-text">{title}</h3>
      <h4 class="body-large on-background-text">{description}</h4>
    </div>
  {/if}
</div>

<style lang="scss">
  .main-wrapper {
    @include mq("medium") {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 5rem;
      text-align: right;
      margin: 5rem 0;
    }

    display: flex;
    flex-direction: column;
    margin: 3rem 0;

    .center-aligned-text {
      text-align: left;
    }
  }
</style>
