import Link from "next/link";

interface ArticleProps {
  title: string;
  date: string;
  numberOfViews: number;
  href: string;
}

export function Article({ title, date, numberOfViews, href }: ArticleProps) {
  return (
    <section className="mt-8">
      <Link
        href={href}
        className="text-gray-950 decoration-gray-400 font-normal underline decoration-solid hover:decoration-gray-500"
      >
        {title}
      </Link>
      <p className="text-sm font-light text-gray-500">
        {date} · {numberOfViews} views
      </p>
    </section>
  );
}
