import { Article } from "../elements/Article";

const posts = [
  {
    title: "My tech plans for 2024",
    date: "January 20, 2024",
    numberOfViews: 0,
  },
  {
    title: "Creating a in-memory server with Koa.js",
    date: "November 21, 2023",
    numberOfViews: 0,
  },
  {
    title: "A Dive into Interfaces vs Types in TypeScript",
    date: "Jul 10, 2023",
    numberOfViews: 0,
  },
  {
    title: "A Little about TypeScript Utility Types",
    date: "Jul 10, 2023",
    numberOfViews: 0,
  },
];

export function Posts() {
  return (
    <>
      <section className="mt-24">
        <p className="text-lg font-bold">Posts</p>
        <p className="mt-4">
          {posts.length} {posts.length > 1 ? "posts" : "post"} · 0 views
        </p>
        {posts.map(({ title, date, numberOfViews }, index) => (
          <Article
            href={"/"}
            key={index}
            title={title}
            date={date}
            numberOfViews={numberOfViews}
          />
        ))}
      </section>
    </>
  );
}
