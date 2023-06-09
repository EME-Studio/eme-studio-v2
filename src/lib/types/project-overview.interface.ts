import type { ProjectCategoryEnum } from "./enums/project-cateogry.enum";

export interface ProjectOverview {
  title: string;
  year: number;
  img: string;
  tags: ProjectCategoryEnum[];
  excerpt: string;
  url: string;
}
