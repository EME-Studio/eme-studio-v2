import type { ProjectOverview } from "../../interface/projectOverview.interface";
import { ProjectCategoryEnum } from "$lib/interface/enums/project-cateogry-enum.enum";

export const projectsOverviews: ProjectOverview[] = [
  {
    title: "Project-1",
    year: 2021,
    url: "project-1",
    img: "/images/web-design-project.webp",
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    title: "Project-2",
    year: 2022,
    url: "project-2",
    img: "/images/web-design-project.webp",
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    title: "Prueba3",
    year: 2020,
    url: "project-1",
    img: "/images/web-design-project.webp",
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    title: "Prueba4",
    year: 2020,
    url: "project-2",
    img: "/images/web-design-project.webp",
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
];
