import type { TagsEnum } from "./enum/tags-enum.enum";

export interface ProjectOverview {
  title: string;
  year: number;
  img: string;
  tag: TagsEnum[];
  excerpt: string;
}
