<script type="ts">
  export let title: string;
  export let description: string;
  export let img: string;
  export let inverse: false;
</script>

<div class:invert-grid={inverse} class="main-wrapper">
  <img src={img} alt={title} class="img-rounded" />
  <div class="prueba">
    <h3 class="headline-small primary-text">{title}</h3>
    <h4 class="body-large on-background-text">{description}</h4>
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    @include mq("medium") {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 5rem;
      text-align: left;
      margin: 5rem 0;
    }

    display: flex;
    flex-direction: column;
    margin: 3rem 0;
  }

  @include mq("medium") {
    .invert-grid {
      .prueba {
        order: -1;
      }
      text-align: right;
    }
  }
</style>
