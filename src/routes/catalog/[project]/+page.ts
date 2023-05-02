import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const project = await import(`../../../lib/content/${params.project}.md`);
    const { title, date, excerpt, videolink, tags } = project.metadata;
    const content = project.default;

    return {
      content,
      title,
      date,
      excerpt,
      videolink,
      tags,
    };
  } catch (e) {
    throw error(404, "This project doesnt exist!");
  }
}
