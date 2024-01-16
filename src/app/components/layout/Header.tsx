import Image from "next/image";

export function Header() {
  return (
    <header className="">
      <Image src="./Nahas.svg" alt="Me" width="50" height="50" />
      <p className="mt-3 font-medium">Murillo Nahás</p>
      <span className="mt-1 text-gray-800">Software Engineer</span> <br />
      <span className="mt-1 text-gray-800">São Paulo, Brazil</span>
    </header>
  );
}
