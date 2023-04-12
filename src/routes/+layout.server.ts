import { projectOverview } from "../lib/content/projects/projectOverview";
import type { ProjectOverview } from "../lib/interface/projectOverview.interface";

export function load() {
  return {
    overviews: projectOverview.map((project: ProjectOverview) => ({
      title: project.title,
      year: project.year,
      img: project.img,
      tag: project.tag,
      excerpt: project.excerpt,
    })),
  };
}
