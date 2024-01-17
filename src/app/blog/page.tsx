import { Return } from "../components/elements/Return";
import { Footer } from "../components/layout/Footer";
import { Posts } from "../components/layout/Posts";

function Blog() {
  return (
    <>
      <main className="w-2/6 m-auto h-auto">
        <Return label="Index" href={"/"} />
        <Posts />
      </main>
      <Footer />
    </>
  );
}

export default Blog;
