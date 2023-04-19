import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`../../../lib/content/${params.project}.md`);
    const { title, date } = post.metadata;
    const content = post.default;
    console.log(post);

    return {
      content,
      title,
      date,
    };
  } catch (e) {
    throw error(404, "This project doesnt exist!");
  }
}
