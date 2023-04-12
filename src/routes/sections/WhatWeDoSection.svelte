<section class="container">
  <div class="top-content-wrapper">
    <div class="left-column-wrapper">
      <div class="title">
        <h2 class="headline-large">
          .we can <span class="color-variant">help<br /></span>_
          <span class="color-variant">you</span> with...
        </h2>
      </div>
    </div>
    <div class="rigth-column-wrapper">
      <div class="service1">
        <h4 class="title-large on-primary-text">
          <span class="color-variant">.</span>web/development
        </h4>
        <p>
          Web development is the building and maintenance of websites.Web
          development is the building and maintenance of websites.
        </p>
      </div>
      <div class="service2">
        <h4 class="title-large on-primary-text">
          <span class="color-variant">.</span>user_interface/design
        </h4>
        <p>
          Focuses on anticipating what users might need to do and ensuring that.
          Web development is the building and maintenance of websites.
        </p>
      </div>
      <div class="service3">
        <h4 class="title-large on-primary-text">
          <span class="color-variant">.</span>staff_argumentation
        </h4>
        <p>
          An outsourcing strategy that is used to staff a project and respond
          to. Web development is the building and maintenance of websites.
        </p>
      </div>
    </div>
  </div>

  <div class="bottom-content-wrapper">
    <div>
      <h4 class="title-large on-primary-text">
        <span class="color-variant">_</span>tools we<span class="color-variant"
          >.</span
        >use
      </h4>
      <p>
        we use modern tools to help us craft the best experience for your users
      </p>
    </div>
    <div>
      <div class="logos-wrapper">
        <div class="image-div">
          <img
            src="src/lib/content/img/cssnewlogo.png"
            alt="example"
            class="css-logo"
          />
        </div>
        <div class="image-div">
          <img
            src="src/lib/content/img/jsnewlogo.png"
            class="js-logo"
            alt="example"
          />
        </div>
        <div class="image-div">
          <img
            src="src/lib/content/img/figmanewlogo.png"
            class="figma-logo"
            alt="example"
          />
        </div>
        <div class="image-div">
          <img
            alt="example"
            src="src/lib/content/img/htmlnewlogo.png"
            class="html-logo"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style type="scss">
  .color-variant {
    color: var(--md-ref-palette-primary4);
  }
  .top-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left-column-wrapper {
      font-weight: 900;
      h2 {
        color: var(--md-sys-color-on-primary-light);
      }
    }
    .rigth-column-wrapper div {
      padding-bottom: 3em;
      color: var(--md-sys-color-on-primary-light);
      h4 {
        margin-bottom: 0.1em;
      }
      p {
        font-weight: lighter;
      }
    }
  }

  .bottom-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5em;
    padding-top: 1em;

    p {
      color: var(--md-sys-color-on-primary-light);
    }
    .logos-wrapper {
      display: flex;
      gap: 3em;
      align-items: end;
    }
    .image-div {
      height: 60px;
      width: 45px;
    }
  }
</style>
