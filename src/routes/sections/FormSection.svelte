<script type="ts">
  import emailjs from "@emailjs/browser";
  import { PUBLIC_EMAIL_JS_KEY } from "$env/static/public";

  function sendEmail(e) {
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        PUBLIC_EMAIL_JS_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }
</script>

<section class="surface-tint">
  <div class="container">
    <h2 class="headline-large">
      Let's bring it <br /> to life together
    </h2>

    <form on:submit|preventDefault={sendEmail}>
      <label for="name" class="label body-medium">Your Name</label>
      <input
        type="text"
        name="user_name"
        class="input"
        placeholder="John Doe"
      />

      <label for="email" class="label body-medium">Your Email Adress</label>
      <input
        type="text"
        name="user_email"
        class="input"
        placeholder="johndoe@domain.com"
      />

      <label for="yourIdea" class="label body-medium">
        Tell us your ideas :)</label
      >
      <textarea
        name="message"
        class="input"
        placeholder="I have plenty of them"
      />

      <input
        class="button background on-background-text"
        type="submit"
        value="Send"
      />
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

      input:not(:last-of-type),
      textarea {
        background-color: transparent;
        border-width: 0.1rem;
        border-radius: 0.5rem;
      }

      input[type="submit"] {
        border-radius: 0.5rem;
        text-decoration: none;
        text-align: center;
      }

      input[type="submit"]:hover {
        cursor: pointer;
      }
    }
  }
</style>
