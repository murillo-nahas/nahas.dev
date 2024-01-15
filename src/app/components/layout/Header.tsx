import Image from "next/image";

export function Header() {
  return (
    <header className="">
      <Image src="./Nahas.svg" alt="Me" width="35" height="35" />
      <p className="mt-3 font-medium">Murillo Nahas</p>
      <span>Software Engineer</span> <br />
      <span>São Paulo, Brazil</span>
    </header>
  );
}
