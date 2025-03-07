import Image from "next/image";
import Link from "next/link";
import React from "react";

function WidePostCard({ post }) {
  return (
    <article className="grid grid-cols-[10.5rem_1fr] gap-1 border-t-[1px] border-borderColor">
      <div className=" grid place-content-center">
        <div className=" w-32 h-32 relative ">
          <Image
            src={post.image}
            alt="main post image"
            className="rounded-full object-cover shadow-md"
            fill
          />
        </div>
      </div>

      <div className="grid grid-rows-[2fr_3fr_1fr] gap-1 py-4">
        <Link href={`/post/${post.slug}`}>
          <h2 className="text-[.8rem] text-textColor font-medium ">
            {post.title}
          </h2>
        </Link>
        <p className=" text-xs text-textColor">{post.description}</p>
        <p className=" text-xs text-textColor grid items-center">
          Tomás Cárdenas • 12/01/2024
        </p>
      </div>
    </article>
  );
}

export default WidePostCard;
