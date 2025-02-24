import { getAllPosts } from "@/lib/posts.js";
import MainPage from "./components/MainPage";
import { cache } from "react";

const getCachedPosts = cache(() => {
  return getAllPosts();
});

function Home() {
  const posts = getCachedPosts();

  return (
    <main className="relative z-10">
      <MainPage posts={posts} />
    </main>
  );
}

export default Home;
