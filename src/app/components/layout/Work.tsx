const work = [
  {
    position: "Software Engineer",
    company: "InLive Consultoria",
    href: "https://www.inlive.com.br/",
    startDate: "2023",
    endDate: null,
  },
  {
    position: "Software Engineer",
    company: "Bradesco Seguros",
    href: "https://www.bradescoseguros.com.br/clientes",
    startDate: "2023",
    endDate: "2024",
  },
  {
    position: "Software Engineer",
    company: "Zella Sistemas",
    href: "https://zellasistemas.com.br/",
    startDate: "2021",
    endDate: "2022",
  },
];

export function Work() {
  return (
    <section className="mt-20">
      <h2 className="font-medium text-gray-950">Work</h2>
      <ul role="list" className="flex flex-col gap-y-4 mt-4">
        {work.map(({ company, endDate, startDate, position, href }, index) => (
          <li
            key={index}
            className="flex flex-row items-center justify-between gap-2"
          >
            <p className="text-gray-950">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 underline decoration-gray-400 decoration-solid hover:decoration-gray-500"
              >
                {position}
              </a>
              , <span className="text-gray-700">{company}</span>
            </p>
            <div className="h-px grow bg-gray-800/80 flex" />
            <p className="text-sm tabular-nums text-gray-500">
              {startDate}&ndash;{endDate ?? "Now"}
            </p>
          </li>
        ))}
      </ul>
      <div className="shadow-md shadow-gray-300 w-36 h-10 mt-8 rounded-lg border border-slate-300 hover:cursor-pointer hover:border-gray-400 flex items-center justify-center">
        <a className="text-sm" href="./resume.pdf" download target="_blank">
          Download my CV
        </a>
      </div>
    </section>
  );
}
