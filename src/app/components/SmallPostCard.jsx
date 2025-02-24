import Image from "next/image";
import Link from "next/link";
import React from "react";

function SmallPostCard({ post }) {
  return (
    <article className="grid grid-rows-[3fr_2fr] gap-1 border-b-[1px] border-borderColor">
      <div className="relative">
        <Image
          src={post.image}
          alt="small post images"
          className="rounded-md object-cover shadow-md"
          fill
        />
      </div>

      <div className=" grid gap-1">
        <Link href={`/post/${post.slug}`}>
          <h2 className="text-[.8rem] text-black font-medium cursor-pointer">
            {post.title}
          </h2>
        </Link>
        <p className=" text-xs text-black">Tomás Cárdenas • 9 hours ago</p>
      </div>
    </article>
  );
}

export default SmallPostCard;
