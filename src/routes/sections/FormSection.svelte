<section class="surface-tint">
  <div class="container">
    <h2 class="headline-large">
      Let's bring it <br /> to life together
    </h2>

    <form>
      <label for="name" class="label body-medium">Your Name</label>
      <input type="text" name="name" class="input" placeholder="John Doe" />

      <label for="email" class="label body-medium">Your Email Adress</label>
      <input
        type="text"
        name="name"
        class="input"
        placeholder="johndoe@domain.com"
      />

      <label for="yourIdea" class="label body-medium">
        Tell us your ideas :)</label
      >
      <textarea name="name" class="input" placeholder="I have plenty of them" />

      <button class="inverse-on-surface-text">Send my idea</button>
    </form>
  </div>
</section>

<style type="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    h2 {
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;

      input,
      textarea {
        background-color: transparent;
        border-width: 0.1rem;
        border-radius: 0.5rem;
      }
      button {
        border-radius: 0.5rem;
      }
    }
  }
</style>
