<script type="ts">
  import AboutUsSection from "./sections/AboutUsSection.svelte";
  import FormSection from "./sections/FormSection.svelte";
  import HeroSection from "./sections/HeroSection.svelte";
  import OurClientsSection from "./sections/OurClientsSection.svelte";
  import ProjectsSection from "./sections/ProjectsSection.svelte";
  import WhatWeDoSection from "./sections/WhatWeDoSection.svelte";

  export let data;
</script>

<div class="section">
  <div class="container">
    <HeroSection />
    <ProjectsSection projects={data.overviews} />
    <OurClientsSection />
    <AboutUsSection />
    <WhatWeDoSection />
    <FormSection />
  </div>
</div>

<style type="scss">
</style>
