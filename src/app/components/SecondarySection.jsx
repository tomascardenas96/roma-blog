import React from "react";
import SmallPostCard from "./SmallPostCard";

function SecondarySection({ secondPost, thirdPost, fourthPost, fifthPost }) {
  return (
    <article className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
      <SmallPostCard post={secondPost} />
      <SmallPostCard post={thirdPost} />
      <SmallPostCard post={fourthPost} />
      <SmallPostCard post={fifthPost} />
    </article>
  );
}

export default SecondarySection;
