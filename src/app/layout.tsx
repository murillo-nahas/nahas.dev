import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./index.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murillo Nahas, Software Engineer",
  description: "Murillo Nahas's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
