<script type="ts">
  import { projectsOverviews } from "$lib/content/projects/projectsOverviews";
  import AboutUsSection from "./sections/AboutUsSection.svelte";
  import HeroSection from "./sections/HeroSection.svelte";
  import OurClientsSection from "./sections/OurClientsSection.svelte";
  import ProjectsSection from "./sections/ProjectsSection.svelte";
  import OurServicesAndTools from "./sections/OurServices/OurServicesAndTools.svelte";
</script>

<HeroSection />
<ProjectsSection projects={projectsOverviews} />
<OurClientsSection />
<AboutUsSection />
<OurServicesAndTools />
