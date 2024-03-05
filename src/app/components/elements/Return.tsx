import Link from "next/link";

interface ReturnProps {
  label: string;
  href: string;
}

export function Return({ label, href }: ReturnProps) {
  return (
    <div className="mt-24">
      <Link
        href={href}
        className="font-medium text-sm text-textGrayDefault hover:text-textGrayDefaultHover"
      >
        ← {label}
      </Link>
    </div>
  );
}
