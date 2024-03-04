import { Return } from "../components/elements/Return";
import { Footer } from "../components/layout/Footer";
import { Posts } from "../components/layout/Posts";

export default function Writing() {
  return (
    <>
      <main className="w-3/6 m-auto h-auto">
        <Return label="Index" href={"/"} />
        <Posts />
      </main>
      <Footer />
    </>
  );
}
