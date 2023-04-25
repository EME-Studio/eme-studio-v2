<script lang="ts">
  import { OUR_SERVICES } from "$lib/config/homePageData";
</script>

<div class="main-wrapper on-background-text">
  <h2 class="display-medium">Our services</h2>
  <div class="card-wrapper">
    {#each OUR_SERVICES as service}
      <div class="card">
        <h4 class="title-large on-background-text">
          <span>.</span>{service.title}
        </h4>
        <p>
          {service.description}
        </p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    .card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .card {
        justify-content: center;
      }

      @include mq("medium") {
        display: flex;
        flex-direction: row;
        gap: 3rem;
      }
    }
  }
</style>
