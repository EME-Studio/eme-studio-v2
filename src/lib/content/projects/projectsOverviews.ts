import type { ProjectOverview } from '../../interface/projectOverview.interface';
import { ProjectCategoryEnum } from '$lib/interface/enums/project-cateogry-enum.enum';

export const projectsOverviews: ProjectOverview[] = [
  {
    title: 'Prueba1',
    year: 2021,
    img: '/images/web-design-project.webp',
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
  },
  {
    title: 'Prueba2',
    year: 2022,
    img: '/images/web-design-project.webp',
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
  },
  {
    title: 'Prueba3',
    year: 2020,
    img: '/images/web-design-project.webp',
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
  },
  {
    title: 'Prueba4',
    year: 2020,
    img: '/images/web-design-project.webp',
    tags: [ProjectCategoryEnum.Development, ProjectCategoryEnum.WebsiteDesign],
    excerpt:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
  },
];
