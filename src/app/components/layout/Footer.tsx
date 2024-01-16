import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { CiChat2 } from "react-icons/ci";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/murillo-nahas",
    icon: <BsGithub className="w-6 h-6 text-slate-600 hover:text-slate-400" />,
  },
  {
    name: "X",
    url: "https://twitter.com/murillonahvs",
    icon: (
      <BsTwitterX className="w-6 h-6 text-slate-600 hover:text-slate-400" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/murillo-nahas/",
    icon: (
      <BsLinkedin className="w-6 h-6 text-slate-600 hover:text-slate-400" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-color-700 mt-16 w-full flex flex-col items-center justify-center">
      <div className="w-2/6 mt-4 mb-4">
        <span className="text-sm text-stone-700">© 2024 Murillo Nahás</span>
        <ul role="list" className="mt-4 flex items-center gap-x-2">
          {socials.map(({ name, url, icon }, i) => (
            <li key={i}>
              <a
                target="_blank"
                title={name}
                href={url}
                className="grid aspect-square ml-2 place-items-center cursor-pointer text-slate-600"
              >
                {icon}
              </a>
            </li>
          ))}
          <CiChat2 className="text-slate-600 hover:text-slate-400 ml-2 cursor-pointer w-8 h-8" />
        </ul>
      </div>
    </footer>
  );
}
