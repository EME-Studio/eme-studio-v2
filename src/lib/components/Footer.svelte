<script type="ts">
  import { FOOTER_ELEMENTS } from "$lib/config/homePageData";
</script>

<footer class="surface-tint">
  <div class="container-small">
    <div class="footer-links on-primary-text">
      {#each FOOTER_ELEMENTS as element}
        <a class="inverse-on-surface-text" href={element.url}>{element.name}</a>
      {/each}
    </div>
  </div>
</footer>

<style lang="scss">
  .container-small {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .footer-links {
      @include mq("medium") {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 4rem;
      }

      border-top: 0.1rem inset;
      opacity: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      a {
        text-decoration: none;
        color: var(--md-sys-color-on-secondary-fixed);
      }
    }
  }
</style>
