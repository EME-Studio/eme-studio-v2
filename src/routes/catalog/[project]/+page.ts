import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const project = await import(`../../../lib/content/${params.project}.md`);
    const content = project.default;
    const metadata = project.metadata;
    return {
      content,
      metadata,
    };
  } catch (e) {
    throw error(404, "This project doesnt exist!");
  }
}
