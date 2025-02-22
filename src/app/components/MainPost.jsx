import Link from "next/link";

function MainPost({ firstPost }) {
  return (
    <article className="grid grid-rows-[4fr_2fr] gap-2">
      <div className="bg-slate-900 rounded-md">{/* Aca va la imagen */}</div>

      <div className=" grid grid-rows-[5fr_4fr_3fr] gap-1">
        <Link href={`/post/${firstPost.slug}`}>
          <h1 className=" text-xl text-black text-medium">{firstPost.title}</h1>
        </Link>

        <p className=" text-xs text-black">{firstPost.description}</p>

        <p className=" text-xs text-black">Tomás Cárdenas • 9 hours ago</p>
      </div>
    </article>
  );
}

export default MainPost;
