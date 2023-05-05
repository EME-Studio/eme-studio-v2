<script type="ts">
  import { TEAM_MEMBERS } from "$lib/config/homePageData";
</script>

<section class="container-small">
  <h2 class="display-small on-background-text">Yes, we are EME</h2>
  <div class="members-wrapper">
    {#each TEAM_MEMBERS as member}
      <div class="card">
        <div class="card-content">
          <h4 class="on-background-text title title-large">{member.name}</h4>
          <img src={member.url} alt={member.name} />
          <p class="on-background-text">{member.description}</p>
          <div class="light-blur inverse-surface" />
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .container-small {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .members-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include mq("medium") {
      display: flex;
      flex-direction: row;
      gap: 4rem;
    }

    .card {
      justify-content: center;
      transition: transform 500ms ease;
      overflow: hidden;

      @include mq("medium") {
        display: flex;
        flex-direction: column;
        gap: 4rem;
      }

      .card-content {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
      }

      .title {
        position: relative;
        width: max-content;
      }

      .title::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: var(--md-sys-color-surface-tint);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms ease;
        transition-delay: 250ms;
      }
    }

    .card:hover .title::after {
      transform: scaleX(1);
    }

    .card:hover {
      transform: scale(1.01);
    }

    .card:hover .card-content {
      transform: translateY(0);
    }

    @media (hover) {
      .card-content {
        transform: translateY(5%);
        transition: transform 500ms ease;
      }
    }
  }
</style>
