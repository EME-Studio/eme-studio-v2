<script type="ts">
  import { EMESTUDIO_STATS } from "$lib/config/homePageData";
</script>

<section class="surface">
  <div class="container">
    <div class="stats-wrapper">
      {#each EMESTUDIO_STATS as stat}
        <div class="individual-stat-wrapper on-background-text">
          <h3 class="display-large on-background-text">{stat.stat}</h3>
          <p class="body-large on-background-text surface-tint-text">
            {stat.description}
          </p>
        </div>
      {/each}
      <div class="light-blur tertiary" />
    </div>
  </div>
</section>

<style lang="scss">
  .stats-wrapper {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: space-around;
    text-align: center;
    position: relative;
  }

  .light-blur {
    width: 500px;
    height: 200px;
    border-radius: 50%;
    z-index: -1;
    filter: blur(40px);
    position: absolute;
    opacity: 0.8;
    position: absolute;
    top: -50%;
  }
</style>
