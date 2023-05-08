<script type="ts">
  export let buttonText: string;
  export let href: string;
</script>

<button>
  <span />
  <a {href} class="label-large on-background-text">{buttonText}</a>
  <span />
</button>

<style lang="scss">
  button {
    background-color: var(--md-sys-color-background);
    border: 0.1 em solid var(--md-sys-color-surface-variant);
    cursor: pointer;
    transition: background-color 250ms;
    border-radius: 3em;
    padding: 0.5em 2.5em;
    position: relative;
    isolation: isolate;
    overflow: hidden;

    a {
      text-decoration: none;
    }
  }

  button:hover,
  button:focus-visible {
    background: var(--md-sys-color-surface-variant);
  }

  button > span {
    position: absolute;
    z-index: -1;
    width: 33.333%;
    height: 100%;
    background: transparent;
    opacity: 0.5;
  }

  button > :first-child {
    left: 0;
    top: 0;
  }

  button > :last-child {
    right: 0;
    top: 0;
  }

  button::before {
    content: "";
    z-index: -1;
    position: absolute;
    background: var(--md-sys-color-tertiary);
    width: 10%;
    aspect-ratio: 1;
    border-radius: 50%;
    inset: 0;
    margin: auto;
    opacity: 0;
    transition: transform 1000ms 200ms, opacity 200ms;
  }

  button:active::before {
    transform: scale(20);
    transition: transform 1000ms, opacity 500ms;
    opacity: 1;
  }

  button:has(:first-child:active)::before {
    margin-left: 0;
  }
  button:has(:last-child:active)::before {
    margin-right: 0;
  }

  button:has(:first-child:active)::before,
  button:has(:last-child:active)::before {
    transition: transform 500ms, opacity 250ms;
  }
</style>
