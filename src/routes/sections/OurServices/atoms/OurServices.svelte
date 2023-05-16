<script lang="ts">
  import { OUR_SERVICES } from "$lib/config/homePageData";
</script>

<div class="main-wrapper on-background-text">
  <h2 class="display-medium">Our services</h2>
  <div class="card-wrapper">
    {#each OUR_SERVICES as service}
      <div class="card">
        <div class="card-content">
          <h4 class="title-large title on-background-text">
            {service.title}
          </h4>
          <p>
            {service.description}
          </p>
          <div class="light-blur inverse-surface" />
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    .card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      @include mq("medium") {
        display: flex;
        flex-direction: row;
        gap: 3rem;

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
          background-color: var(--md-sys-color-inverse-surface);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 500ms ease;
          transition-delay: 250ms;
        }

        .card {
          justify-content: center;
          transition: transform 500ms ease;
          overflow: hidden;

          .card-content {
            display: flex;
            flex-direction: column;
            gap: 1.3rem;
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
            transform: translateY(90%);
            transition: transform 500ms ease;
          }
        }

        .light-blur {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          z-index: -1;
          filter: blur(60px);
          position: absolute;
          opacity: 0.8;
          position: absolute;
          top: 115%;
        }
      }
    }
  }
</style>
