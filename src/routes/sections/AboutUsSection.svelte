<section class="background on-background-text">
  <div class="container">
    <div class="left-column-wrapper">
      <h2 class="display-medium">Our team</h2>
      <h5 class="headline-medium">
        We're amultidisciplinary team focused on building solutions
      </h5>
    </div>
    <div class="right-column-wrapper">
      <img src="/images/Albion-ejemplo.jpg" alt="hola" />
    </div>
  </div>
</section>

<style lang="scss">
  section {
    .container {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      @include mq("medium") {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        padding: 3rem;
      }

      .left-column-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .right-column-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        img {
          max-width: 18rem;
        }
      }
    }
  }
</style>
