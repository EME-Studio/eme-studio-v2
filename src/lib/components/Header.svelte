<script type="ts">
  import { NAV_ELEMENTS } from "$lib/config/homePageData";
  import { fly } from "svelte/transition";
  import AnimatedHumburger from "./AnimatedHumburger.svelte";
  import AnimatedButton from "./AnimatedButton.svelte";

  let open = false;
  let onClick = (): void => {
    open = !open;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
</script>

<header>
  <div class="desktop-menu surface-tint">
    <a href="./" class="on-secondary-text"
      ><img src="/images/EMEstudio_iso_negro.png" alt="logo" /></a
    >
    <nav>
      <ul>
        {#each NAV_ELEMENTS as element}
          <li>
            <a class="on-secondary-text" href="/{element.url}">{element.name}</a
            >
          </li>
        {/each}
      </ul>
    </nav>

    <AnimatedButton buttonText={"Contact us"} href={"#footerId"} />
  </div>
  <div class="mobile-menu">
    <div class="animated-hamburger-menu">
      <AnimatedHumburger {open} {onClick} />
      {#if open}
        <nav transition:fly={{ y: -200, duration: 400 }}>
          {#each NAV_ELEMENTS as navElements}
            <li>
              <a class="on-background-text display-small" href="/"
                >{navElements.name}</a
              >
            </li>
          {/each}
        </nav>
      {/if}
    </div>

    <a href="/" class="on-secondary-text eme-logo-mobile"
      ><img src="/images/EMEstudio_iso_blanco.png" alt="logo" /></a
    >
  </div>
</header>

<style lang="scss">
  header {
    padding-top: 3rem;
    margin-inline: auto;

    img {
      max-width: 3rem;
    }

    .desktop-menu {
      @include mq("medium") {
        display: flex;
        flex-direction: row;
        padding: 0.5rem 3rem;
        border-radius: 3rem;
        justify-content: space-around;
        align-items: center;
        gap: 6rem;

        ul {
          list-style: none;
        }

        li {
          display: inline;
          padding: 1rem;
        }

        a {
          text-decoration: none;
        }
      }

      display: none;
    }

    .mobile-menu {
      @include mq("medium") {
        display: none;
      }

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.5rem 3rem;

      .animated-hamburger-menu {
        display: flex;
        flex-direction: column;
        align-items: left;

        nav {
          height: 100vh;
        }

        li {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }
      }

      .eme-logo-mobile {
        margin-top: 1rem;
      }
    }
  }
</style>
