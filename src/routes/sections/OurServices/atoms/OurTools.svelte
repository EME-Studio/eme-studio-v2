<script lang="ts">
  import { OUR_TOOLS_LOGOS } from '$lib/config/homePageData';
</script>

<div class="main-wrapper">
  <div>
    <h4 class="title-large on-primary-text">
      <span class="color-variant">_</span>tools we<span class="color-variant">.</span>use
    </h4>
    <p>we use modern tools to help us craft the best experience for your users</p>
  </div>
  <div>
    {#each OUR_TOOLS_LOGOS as logo}
      <img src={logo.imageUrl} alt={logo.alt} />
    {/each}
  </div>
</div>

<style type="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include mq('medium') {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 5rem;
    }

    div:last-child {
      display: flex;
      gap: 2rem;
      align-items: end;
      flex-wrap: wrap;

      img {
        max-width: 3rem;
      }
    }
  }
</style>
