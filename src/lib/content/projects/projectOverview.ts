import type { ProjectOverview } from "../../interface/projectOverview.interface";
import { TagsEnum } from "$lib/interface/enum/tags-enum.enum";

export const projectOverview: ProjectOverview[] = [
  {
    title: "Prueba1",
    year: 2021,
    img: "src/lib/content/img/web-design-project.webp",
    tag: [TagsEnum.Development, TagsEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    title: "Prueba2",
    year: 2022,
    img: "src/lib/content/img/web-design-project.webp",
    tag: [TagsEnum.Development, TagsEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    title: "Prueba3",
    year: 2020,
    img: "src/lib/content/img/web-design-project.webp",
    tag: [TagsEnum.Development, TagsEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    title: "Prueba4",
    year: 2020,
    img: "src/lib/content/img/web-design-project.webp",
    tag: [TagsEnum.Development, TagsEnum.WebsiteDesign],
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
];
