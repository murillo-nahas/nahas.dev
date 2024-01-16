import Link from "next/link";

export function Writing() {
  return (
    <section className="mt-20">
      <h2 className="font-medium text-gray-950">Writing</h2>
      <div className="mt-6">
        <Link
          className="text-gray-950 decoration-gray-400 font-medium underline decoration-solid hover:decoration-gray-500"
          href={"blog"}
        >
          My tech plans for 2024
        </Link>
        <p className="text-sm text-stone-700 leading-7">
          January 20, 2024 · 0 views
        </p>
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
