import React from "react";
import WidePostCard from "./WidePostCard";

function TertiarySection({ sixthPost, seventhPost }) {
  return (
    <article className="grid grid-rows-2 gap-1">
      <WidePostCard post={sixthPost}/>
      <WidePostCard post={seventhPost}/>
    </article>
  );
}

export default TertiarySection;
