<script lang="ts">
  import { OUR_TOOLS_LOGOS } from "$lib/config/homePageData";
</script>

<div class="main-wrapper">
  <div>
    <h4 class="headline-large on-background-text">Tools we use</h4>
    <p class="on-background-text">
      we use modern tools to help us craft the best experience for your users
    </p>
  </div>
  <div class="logos-wrapper">
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
    padding: 5rem;
    text-align: center;

    div:last-child {
      display: flex;
      gap: 2rem;
      justify-content: space-around;
      align-items: center;
    }

    @include mq("medium") {
      display: flex;
      flex-direction: row;
      gap: 3rem;
      text-align: left;

      p {
        width: 70%;
      }
    }

    div:last-child {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    img {
      max-height: 3rem;
      max-width: 6rem;
      aspect-ratio: inherit;
    }
  }
</style>
