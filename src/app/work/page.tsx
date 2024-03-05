import { Metadata } from "next";
import { Return } from "../components/elements/Return";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <>
      <main className="w-2/6 m-auto h-auto">
        <p className="mt-32 font-medium text-textGray">Work</p>
        <p className="mt-4 text-sm text-textGrayDefault">
          Where you can find more about my professional experience
        </p>

        <p className="mt-16 font-medium text-sm text-textGray">
          Under development...
        </p>
        <Return label="Back" href={"/home"} />
      </main>
    </>
  );
}
