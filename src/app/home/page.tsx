import { About } from "../components/layout/About";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Work } from "../components/layout/Work";
import { Writing } from "../components/layout/Writing";

function Home() {
  return (
    <>
      <main className="w-2/6 m-auto h-auto">
        <Header />
        <About />
        <Work />
        <Writing />
      </main>
      <Footer />
    </>
  );
}

export default Home;
