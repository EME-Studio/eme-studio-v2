<section class="container-small">
  <h1 class="display-large on-background-text">
    We develop<br />websites for the <br />21st century
  </h1>
  <p class="on-background-text">
    NuxtLabs is the bridge between open-source software development and
    enterprise-grade web services. We provide a complete set of solutions to
    every company that wants to harness the full power of Vue and Nuxt.
  </p>

  <div class="circles-wrapper center">
    <div class="circle xxlarge center" />
    <div class="circle xlarge center" />
    <div class="circle large center" />
    <div class="circle medium center" />
    <div class="circle small center" />
  </div>
</section>

<style type="scss">
  .container-small {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1,
    p {
      overflow-wrap: break-word;
    }

    .circles-wrapper {
      position: relative;
      top: -400px;
      margin-bottom: -600px;
      height: 600px;
      width: 100%;
    }

    .circle {
      position: absolute;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(255, 255, 255);
      border-radius: 50%;
      z-index: -1;
    }

    .circle.small {
      width: 400px;
      height: 400px;
      opacity: 20%;
    }

    .circle.medium {
      opacity: 15%;
      width: 550px;
      height: 550px;
    }
    .circle.large {
      opacity: 5%;
      width: 700px;
      height: 700px;
    }
    // .circle.xlarge {
    //   width: 900px;
    //   height: 900px;
    // }

    // .circle.xxlarge {
    //   box-sizing: border-box;
    //   width: 1100px;
    //   height: 1100px;
    // }

    .center {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
</style>
