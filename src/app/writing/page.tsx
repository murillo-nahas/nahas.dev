import { Metadata } from "next";
import { Return } from "../components/elements/Return";

export const metadata: Metadata = {
  title: "Writing",
};

export default function Writing() {
  return (
    <>
      <main className="w-3/6 m-auto h-auto">
        <p className="mt-32 font-medium text-textGray">Writing</p>
        <p className="mt-4 text-sm text-textGrayDefault">
          This is where my ideas come to life
        </p>

        <p className="mt-16 font-medium text-sm text-textGray">
          Under development...
        </p>
        <Return label="Back" href={"/home"} />
      </main>
    </>
  );
}
