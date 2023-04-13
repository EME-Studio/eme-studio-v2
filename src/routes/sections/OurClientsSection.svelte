<script lang="ts">
  import { CLIENTS_LOGOS } from '$lib/config/homePageData';
</script>

<section class="container">
  <h3 class="headline-medium">
    .<span>some of our</span> /<span>amazing</span>
    /<span>clients</span>
  </h3>
  <div class="logos-wrapper">
    {#each CLIENTS_LOGOS as logo}
      <img src={logo.imageUrl} alt={logo.alt} />
    {/each}
  </div>
</section>

<style type="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .logos-wrapper {
      display: flex;
      flex-direction: row;
      gap: 3rem;
      flex-wrap: wrap;

      img {
        max-width: 4rem;
      }
    }
  }
</style>
