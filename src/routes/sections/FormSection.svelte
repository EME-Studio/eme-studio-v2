<div class="wrapper">
  <section class="contaienr">
    <div class="content-wrapper">
      <div>
        <h2 class="headline-large">got an idea?</h2>
        <h4 class="headline-medium">let's bring it <br /> to life together</h4>
      </div>
      <div>
        <form>
          <div class="form-control">
            <label for="name" class="label body-medium">
              <span>Your Name</span>
            </label>

            <input
              type="text"
              name="name"
              class="input"
              placeholder="John Doe"
            />
          </div>
          <div class="form-control">
            <label for="email" class="label body-medium">
              <span>Your Email Adress</span>
            </label>

            <input
              type="text"
              name="name"
              class="input"
              placeholder="johndoe@domain.com"
            />
          </div>
          <div class="form-control">
            <label for="yourIdea" class="label body-medium">
              <span>Tell us your ideas :)</span>
            </label>

            <textarea
              name="name"
              class="input"
              placeholder="I have plenty of them"
            />
          </div>
          <button>send my idea</button>
        </form>
      </div>
    </div>
  </section>
</div>

<style type="scss">
  .wrapper {
    background-color: var(--md-ref-palette-primary4);
    box-shadow: 0 0 0 100vmax var(--md-ref-palette-primary4);
    clip-path: inset(0 -100vmax);
  }
  .content-wrapper {
    color: var(--md-ref-palette-neutral100);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    width: 20em;
    padding-bottom: 1.5em;
  }
  button {
    width: 20em;
    height: 2em;
    font-weight: 100;
    background-color: var(--md-source);
    color: white;
    border: transparent;
  }
  .label {
    padding-bottom: 0.3em;
  }
  input {
    height: 2.5em;
  }
  textarea {
    height: 4em;
  }
  ::placeholder {
    padding: 1em;
    font-weight: lighter;
    font-size: smaller;
  }
</style>
