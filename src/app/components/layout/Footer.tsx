"use client";
import React, { useState } from "react";
import { Contact } from "./Contact/Contact";

const socials = [
  {
    name: "@murillonahvs",
    url: "https://twitter.com/murillonahvs",
  },
  {
    name: "GitHub",
    url: "https://github.com/murillo-nahas",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/murillo-nahas/",
  },
  {
    name: "E-mail",
    url: "",
  },
];

export function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <footer className="mt-16 w-full">
      <p className="font-medium text-textGray">Connect</p>

      <nav className="mt-6">
        {socials.map((el, index) => (
          <React.Fragment key={el.name}>
            {el.name === "E-mail" ? (
              <a
                href={el.url}
                onClick={handleOpenModal}
                className="underline text-textGrayDefault hover:text-textGrayDefaultHover"
              >
                {el.name}
              </a>
            ) : (
              <a
                href={el.url}
                target="_blank"
                className="underline text-textGrayDefault hover:text-textGrayDefaultHover"
              >
                {el.name}
              </a>
            )}

            {index !== socials.length - 1 && <span>&nbsp;·&nbsp;</span>}
          </React.Fragment>
        ))}
      </nav>

      <Contact isOpen={isModalOpen} closeModal={handleCloseModal} />
    </footer>
  );
}
