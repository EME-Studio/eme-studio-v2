<script>
</script>

<section class="container-small">
  <div class="content-wrapper">
    <div class="text-wrapper on-background-text">
      <h4 class="display-medium">Experience EMEstudio</h4>
      <p>
        With our unwavering commitment to excellence, we create modern websites
        that not only reflect your unique vision but also engage users with
        seamless functionality and a user-friendly experience.
      </p>
    </div>

    <img src="/images/Albion-ejemplo.jpg" alt="" />
  </div>
</section>

<style lang="scss">
  .content-wrapper {
    @include mq("medium") {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10rem;
      align-items: center;
    }

    display: flex;
    flex-direction: column;
    gap: 3rem;

    .text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    img {
      border-radius: 0.8rem;
      align-items: right;
    }
  }
</style>
