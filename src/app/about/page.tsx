import { Metadata } from "next";
import { Return } from "../components/elements/Return";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  return (
    <>
      <main className="w-3/6 m-auto h-auto">
        <p className="mt-32 font-medium text-textGray">About me</p>
        <p className="mt-4 text-sm text-textGrayDefault">
          A little about my history...
        </p>

        <p className="mt-16 font-medium text-sm text-textGray">
          Under development...
        </p>
        <Return label="Back" href={"/home"} />
      </main>
    </>
  );
}
