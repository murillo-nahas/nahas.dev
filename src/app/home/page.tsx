import { About } from "../components/layout/About";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Work } from "../components/layout/Work";
import { Writing } from "../components/layout/Writing";

export function Home() {
  return (
    <main className="border-gray-600">
      <Header />
      <About />
      <Work />
      <Writing />
      <Footer />
    </main>
  );
}
