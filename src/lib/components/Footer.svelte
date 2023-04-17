<script type="ts">
  import { FOOTER_ELEMENTS } from "$lib/config/homePageData";
</script>

<section class="surface-tint">
  <div class="container">
    <div class="footer-line" />
    <div class="footer-links on-primary-text">
      {#each FOOTER_ELEMENTS as footElements}
        <a class="inverse-on-surface-text" href={footElements.url}
          >{footElements.name}</a
        >
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 50%;

    .footer-line {
      border-bottom: 0.1em solid;
      opacity: 20%;
    }

    .footer-links {
      @include mq("medium") {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 4rem;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      a {
        text-decoration: none;
      }
    }
  }
</style>
