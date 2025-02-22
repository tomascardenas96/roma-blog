import MainPost from "./MainPost";
import NewsLetter from "./NewsLetter";
import SecondarySection from "./SecondarySection";
import TertiarySection from "./TertiarySection";

function MainPage({ posts }) {
  const firstPost = posts[0];
  const secondPost = posts[1];
  const thirdPost = posts[2];
  const fourthPost = posts[3];
  const fifthPost = posts[4];
  const sixthPost = posts[5];
  const seventhPost = posts[6];

  return (
    <div className="h-[100svh] bg-foreground px-48 pt-6 pb-16 grid gap-16 grid-cols-2 ">
      <section className="grid grid-rows-[5fr_3fr] ">
        <MainPost firstPost={firstPost} />
        <TertiarySection sixthPost={sixthPost} seventhPost={seventhPost} />
      </section>

      <section className="grid grid-rows-[5fr_3fr] ">
        <SecondarySection
          secondPost={secondPost}
          thirdPost={thirdPost}
          fourthPost={fourthPost}
          fifthPost={fifthPost}
        />
        <NewsLetter />
      </section>
    </div>
  );
}

export default MainPage;
