<script lang="ts">
  import { OUR_SERVICES } from '$lib/config/homePageData';
</script>

<div class="main-wrapper">
  <h2 class="headline-large">
    .we can <span>help<br /></span>_
    <span>you</span> with...
  </h2>
  <div>
    {#each OUR_SERVICES as service}
      <div>
        <h4 class="title-large on-primary-text">
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

    @include mq('medium') {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    div:last-child {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h4 {
        margin-bottom: 0.1em;
      }
      p {
        font-weight: lighter;
      }
    }
  }
</style>
