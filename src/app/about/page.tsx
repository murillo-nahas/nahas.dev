import { Metadata } from "next";
import { Return } from "../components/elements/Return";
import { LastUpdated } from "../components/elements/LastUpdated";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  return (
    <>
      <main className="w-2/6 m-auto h-auto">
        <p className="mt-32 font-medium text-textGray">About me</p>
        <p className="mt-4 text-sm text-textGrayDefault">
          I&apos;m a Software Engineer from Brazil, totally focused on
          delivering great products, maintaining scalability, and high-quality
          code.
        </p>
        <p className="mt-4 text-sm text-textGrayDefault">
          A Software Engineer with expertise in JavaScript, TypeScript, Node,
          React/Next, Vue/Nuxt, Angular/Ionic and always willing to learn new
          technologies.
        </p>
        <p className="mt-4 text-sm text-textGrayDefault">
          Constantly learning and seeking innovative solutions! I have already
          worked in projects for education, franchising, finances, and
          logistics, I aim for the perfect balance between performance,
          affordability, and visual appeal.
        </p>

        <LastUpdated date="March 05, 2024" />
        <Return label="Back" href={"/home"} />
      </main>
    </>
  );
}
