<script type="ts">
  import { NAV_ELEMENTS } from "$lib/config/homePageData";

  import { fly } from "svelte/transition";

  import AnimatedHumburger from "./AnimatedHumburger.svelte";

  export let open = false;
  export let onClick = (): void => {
    open = !open;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
</script>

<header>
  <section class="container">
    <div class="desktop-menu surface-tint header">
      <a href="/" class="on-secondary-text">EME STUDIO</a>
      <nav>
        <ul>
          {#each NAV_ELEMENTS as navElements}
            <li>
              <a class="on-secondary-text" href="/">{navElements.name}</a>
            </li>
          {/each}
        </ul>
      </nav>
      <a href="/home"
        ><button class="background on-background-text label-large"
          >Contact us</button
        ></a
      >
    </div>
    <div class="mobile-menu">
      <AnimatedHumburger {open} {onClick} />
      {#if open}
        <nav transition:fly={{ y: -200, duration: 400 }}>
          {#each NAV_ELEMENTS as navElements}
            <li>
              <a class="on-background-text body-large" href="/"
                >{navElements.name}</a
              >
            </li>
          {/each}
        </nav>
      {/if}
    </div>
  </section>
</header>

<style lang="scss">
  .container {
    max-width: 50%;

    .desktop-menu {
      @include mq("medium") {
        display: flex;
        flex-direction: row;
        padding: 0.4rem;
        border-radius: 1.5rem;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
      }

      button {
        border-radius: 2rem;
        padding: 1em;
      }

      display: none;
    }

    .mobile-menu {
      @include mq("medium") {
        display: none;
      }

      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        display: flex;
        flex-direction: column;
        padding: 2rem;
      }
    }
  }
</style>
