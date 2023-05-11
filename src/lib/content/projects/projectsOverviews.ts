import type { ProjectOverview } from "../../types/project-overview.interface";
import { ProjectCategoryEnum } from "$lib/types/enums/project-cateogry.enum";

export const projectsOverviews: ProjectOverview[] = [
  {
    title: "Emerald Academy",
    year: 2023,
    url: "emerald-academy",
    img: "/images/Emerald-Academy-Home.png",
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      "Emerald Academy is the most active community for learning and building on the flow blockchain. Our main challenge was to create a great platform full of content: bootcamps, courses, roadmaps in several languages, accessible for everyone",
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
