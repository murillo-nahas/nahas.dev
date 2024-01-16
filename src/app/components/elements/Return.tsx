import Link, { LinkProps } from "next/link";

interface ReturnProps {
  label: string;
  href: string;
}

export function Return({ label, href }: ReturnProps) {
  return (
    <div className="mt-24">
      <Link
        href={href}
        className="font-light text-gray-500 hover:text-gray-700"
      >
        ← {label}
      </Link>
    </div>
  );
}
