<section>
  <div class="container">
    <div class="asterisk-wrapper">
      <span class="asterisk">*</span>
    </div>
    <p class="label-large">web development and design studio</p>
    <h1 class="display-large">
      .<span class="color-variant">we</span>
      develop<br /> /websites
      <span class="color-variant"> for the <br />21st century</span>
    </h1>
  </div>
</section>

<style type="scss">
  .container {
    text-align: center;

    .label-large {
      color: white;
      font-weight: lighter;
    }
    .display-large {
      font-weight: 900;
    }
    .color-variant {
      color: var(--md-sys-color-on-primary-light);
    }
    .asterisk-wrapper {
      position: relative;
    }
    .asterisk {
      position: absolute;
      top: -10%;
      left: 64%;
      color: var(--md-sys-color-on-primary-light);
      font-size: 150px;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0.6px;
      font-weight: bold;
      z-index: -1;
    }
  }
</style>
