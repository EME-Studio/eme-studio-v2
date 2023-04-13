<section class="background on-background-text">
  <div class="container">
    <div class="left-column-wrapper">
      <h2 class="headline-large">
        .<span class="inverse-primary-text">about</span><br />_EME<span>.</span>Studio
      </h2>
      <h4 class="headline-medium">
        /<span>we're a</span>multidisciplinary<span>.</span> team
        <span>focused on building solutions</span>
      </h4>
      <p>
        Our curiosity leads us to live in a state of constant learning. We’re passionate about learning new technologies
        and embarking on new challenges.
      </p>
    </div>
    <div class="right-column-wrapper">
      <img src="/images/memoji3.png" alt="" />
      <h4 class="headline-medium">
        _<span>we're web</span>developers<span>. full stacj developers and UX/UI</span>designers
      </h4>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    .container {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      @include mq('medium') {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
      }

      .left-column-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .headline-large {
          font-weight: bold;
        }
      }

      .right-column-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        img {
          max-width: 10rem;
        }
      }
    }
  }
</style>
