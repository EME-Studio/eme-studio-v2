<section class="container">
  <h1 class="display-large on-background-text">
    We develop<br />websites for the <br />21st century
  </h1>
  <p class="on-background-text">
    NuxtLabs is the bridge between open-source software development and
    enterprise-grade web services. We provide a complete set of solutions to
    every company that wants to harness the full power of Vue and Nuxt.
  </p>
</section>

<style type="scss">
  .container {
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @include mq("medium") {
      max-width: 60%;
    }

    h1,
    p {
      overflow-wrap: break-word;
    }
  }
</style>
