<div class="wrapper">
  <section class="container">
    <div>
      <h2 class="headline-large">
        .<span>about</span><br />_EME<span>.</span>Studio
      </h2>
      <h4 class="headline-medium">
        /<span>we're a</span>multidisciplinary<span>.</span> team
        <span>focused on building solutions</span>
      </h4>
      <p>
        Our curiosity leads us to live in a state of constant learning. We’re
        passionate about learning new technologies and embarking on new
        challenges.
      </p>
    </div>
    <div class="right-column-wrapper">
      <img src="src/lib/content/img/memoji3.png" alt="" />
      <h4 class="headline-medium">
        _<span>we're web</span>developers<span
          >. full stacj developers and UX/UI</span
        >designers
      </h4>
    </div>
  </section>
</div>

<style type="scss">
  span,
  p {
    color: var(--md-sys-color-on-primary-light);
  }
  .headline-large {
    font-weight: bold;
  }
  h2,
  h4 {
    color: var(--md-source);
    padding-bottom: 2em;
  }

  .wrapper {
    background-color: var(--md-ref-palette-primary4);
    box-shadow: 0 0 0 100vmax var(--md-ref-palette-primary4);
    clip-path: inset(0 -100vmax);
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5em;
  }

  .right-column-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      padding-top: 3em;
    }
    img {
      width: 10em;
    }
  }
</style>
