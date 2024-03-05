import Image from "next/image";

export function Header() {
  return (
    <header className="mt-32">
      <Image src="./Nahas.svg" alt="Me" width="50" height="50" />
      <p className="mt-3 font-medium text-textGray">Murillo Nahás</p>
      <span className="mt-1 text-textGrayDefault">Software Engineer</span>{" "}
      <br />
      <span className="mt-1 text-textGrayDefault">São Paulo, Brazil</span>
    </header>
  );
}
