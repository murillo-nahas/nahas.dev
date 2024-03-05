import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murillo Nahás",
  description: `
   I'm a full-stack developer specializing in React.js/Next, TypeScript, and their ecosystem. Enthusiastic about crafting content and disseminating knowledge on the internet.`,
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
