import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    mdsvex({
      extensions: [".md"],
    }),
    preprocess({
      scss: {
        prependData: '@use "src/lib/styles/abstracts/mixins.scss" as *;',
      },
      postcss: true,
    }),
    sveltePreprocess(),
  ],

  kit: {
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
  },
};

export default config;
