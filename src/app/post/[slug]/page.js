import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

async function fetchPosts(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

async function Page({ params }) {
  const { slug } = await params;
  const post = await fetchPosts(slug);

  if (!post) notFound();

  const htmlConverter = md.render(post.content);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlConverter }}></div>
    </article>
  );
}

export default Page;
