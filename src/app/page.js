import { getAllPosts } from "@/lib/posts.js";
import Image from "next/image";
import Link from "next/link";
import MainPage from "./components/MainPage";

function Home() {
  const posts = getAllPosts();

  return (
    <main className="relative z-10">
      <MainPage posts={posts} />

      <ul>
        {/* <li>Posts</li>
        {posts.map((post) => (
          <li>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
            <p>{post.date}</p>
          </li>
        ))} */}
      </ul>
    </main>
  );
}

export default Home;
