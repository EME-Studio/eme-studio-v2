<script type="ts">
  import { NAV_ELEMENTS } from "$lib/config/homePageData";
</script>

<header>
  <section>
    <div class="container surface-tint">
      <a href="/">EME STUDIO</a>
      <nav>
        <ul>
          {#each NAV_ELEMENTS as navElements}
            <a href="/">
              <li>
                {navElements.name}
              </li>
            </a>
          {/each}
        </ul>
      </nav>
      <button class="background"><p class="label-small">Contact us</p></button>
    </div>
  </section>
</header>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    max-width: 60%;
    padding: 0.5rem;
    border-radius: 1rem;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    ul {
      list-style: none;
    }
    li {
      display: inline;
    }
    a {
      text-decoration: none;
    }
    button {
      border-radius: 0.8em;
      color: var(--md-sys-color-on-background);
      padding: 0.7em;
    }
  }
</style>
