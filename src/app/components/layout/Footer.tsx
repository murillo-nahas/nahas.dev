import GitHubIcon from "/public/icons/github.svg";
import ResumeIcon from "/public/icons/resume.svg";
import XIcon from "/public/icons/x.svg";
import Image from "next/image";

const socials = [
  {
    name: "GitHub",
    url: "/github",
    icon: GitHubIcon,
  },
  {
    name: "X",
    url: "/x",
    icon: XIcon,
  },
  {
    name: "Read.CV",
    url: "/cv",
    icon: ResumeIcon,
  },
];

export function Footer() {
  return (
    <footer className="mt-24 mb-8">
      <span>© 2024 Murillo Nahás</span>
      <ul role="list" className="mt-6 flex items-center gap-x-2">
        {socials.map(({ name, url, icon }, i) => (
          <li key={i}>
            <a
              target="_blank"
              title={name}
              href={url}
              className="grid aspect-square w-8 place-items-center cursor-pointer "
            >
              <Image src={icon} alt="Social Icon" width="25" height="25" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
