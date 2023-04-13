<section class="background">
  <div class="container">
    <h2 class="headline-large">got an idea? <br /> let's bring it <br /> to life together</h2>

    <form>
      <label for="name" class="label body-medium">Your Name</label>
      <input type="text" name="name" class="input" placeholder="John Doe" />

      <label for="email" class="label body-medium">Your Email Adress</label>
      <input type="text" name="name" class="input" placeholder="johndoe@domain.com" />

      <label for="yourIdea" class="label body-medium"> Tell us your ideas :)</label>
      <textarea name="name" class="input" placeholder="I have plenty of them" />

      <button>Send my idea</button>
    </form>
  </div>
</section>

<style type="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include mq('medium') {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  }
</style>
