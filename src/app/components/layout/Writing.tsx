import Link from "next/link";
import { Article } from "../elements/Article";

const posts = [
  {
    title: "My tech plans for 2024",
    date: "January 20, 2024",
    numberOfViews: 0,
    href: "/blog",
  },
  {
    title: "Creating a in-memory server with Koa.js",
    date: "November 21, 2023",
    numberOfViews: 0,
    href: "/blog",
  },
  {
    title: "A Dive into Interfaces vs Types in TypeScript",
    date: "Jul 10, 2023",
    numberOfViews: 0,
    href: "/blog",
  },
];

export function Writing() {
  return (
    <section className="mt-20">
      <h2 className="font-medium text-gray-950">Writing</h2>
      <p className="text-sm font-light text-gray-500">The last three posts</p>
      <div>
        {posts.map(({ title, date, numberOfViews, href }, index) => (
          <Article
            href={href}
            key={index}
            title={title}
            date={date}
            numberOfViews={numberOfViews}
          />
        ))}
      </div>
      <p className="mt-12">
        Read more{" "}
        <Link
          href={"blog"}
          className="text-gray-950 decoration-gray-400 font-medium underline decoration-solid hover:decoration-gray-500"
        >
          blog posts
        </Link>{" "}
      </p>
    </section>
  );
}
