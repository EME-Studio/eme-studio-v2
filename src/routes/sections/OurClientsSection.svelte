<script lang="ts">
  import { CLIENTS_LOGOS } from "$lib/config/homePageData";
</script>

<section class="container">
  <h3 class="headline-large on-background-text">Some of our amazing clients</h3>
  <div class="logos-wrapper">
    {#each CLIENTS_LOGOS as logo}
      <img src={logo.imageUrl} alt={logo.alt} />
    {/each}
  </div>
  <div class="shadow" />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    position: relative;

    .shadow {
      width: 500px;
      height: 200px;
      border-radius: 50%;
      z-index: -1;
      filter: blur(60px);
      position: absolute;
      opacity: 0.8;
      background-color: white;
      position: absolute;
      top: 115%;
    }

    .logos-wrapper {
      display: flex;
      flex-direction: row;
      gap: 6rem;
      flex-wrap: wrap;

      img {
        max-width: 4rem;
      }
    }
  }
</style>
