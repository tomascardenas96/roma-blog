import MainPost from "./MainPost";
import NewsLetter from "./NewsLetter";
import SecondarySection from "./SecondarySection";
import TertiarySection from "./TertiarySection";

function MainPage({ posts }) {
  const mainPosts = posts.slice(0, 7);

  return (
    <div className="bg-foreground px-48 pt-10 pb-16 grid gap-16 grid-cols-2">
      <section className="grid grid-rows-[5fr_3fr] ">
        <MainPost firstPost={mainPosts[0]} />
        <TertiarySection sixthPost={mainPosts[5]} seventhPost={mainPosts[6]} />
      </section>

      <section className="grid grid-rows-[5fr_3fr]">
        <SecondarySection
          secondPost={mainPosts[1]}
          thirdPost={mainPosts[2]}
          fourthPost={mainPosts[3]}
          fifthPost={mainPosts[4]}
        />
        <NewsLetter />
      </section>
    </div>
  );
}

export default MainPage;
