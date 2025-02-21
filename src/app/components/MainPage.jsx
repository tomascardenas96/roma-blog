import React from "react";

function MainPage({ posts }) {
  return (
    <div className="min-h-svh bg-foreground px-44 pt-10 pb-16 grid gap-16 grid-cols-2 ">
      <section className="bg-slate-500 grid grid-rows-[5fr_4fr] gap-4">
        <article className="bg-slate-700"></article>
        <article className="bg-slate-700"></article>
      </section>

      <section className="bg-slate-500 grid grid-rows-[5fr_4fr] gap-4">
        <article className="bg-slate-700"></article>
        <article className="bg-slate-700"></article>
      </section>
    </div>
  );
}

export default MainPage;
