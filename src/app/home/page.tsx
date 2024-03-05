"use client";

import Link from "next/link";
import { Header } from "../components/layout/Header";
import { useState } from "react";
import { Contact } from "../components/layout/Contact/Contact";
import { Footer } from "../components/layout/Footer";
import React from "react";

const pagesNavigation = [
  {
    name: "Writing",
    url: "/writing",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Work",
    url: "/work",
  },
];

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <>
      <main className="w-3/6 m-auto h-auto">
        <Header />

        <p className="mt-16 text-textGrayDefault">
          I&apos;m a full-stack developer specializing in React.js/Next,
          TypeScript, and their ecosystem. Enthusiastic about crafting content
          and disseminating knowledge on the internet.
        </p>

        <p className="mt-8 text-textGrayDefault">
          You can read more about me on&nbsp;
          <Link
            href={"/about"}
            className="font-medium underline hover:text-textGrayDefaultHover"
          >
            about
          </Link>
          &nbsp;page.
        </p>

        <nav className="mt-8">
          {pagesNavigation.map((el, index) => (
            <React.Fragment key={el.name}>
              <Link
                href={el.url}
                className="text-textGrayDefault hover:text-textGrayDefaultHover underline hover:decoration-wavy"
              >
                {el.name}
              </Link>
              {index !== pagesNavigation.length - 1 && (
                <span>&nbsp;·&nbsp;</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <p className="mt-8 text-textGrayDefault">
          Feel free to mail me by&nbsp;
          <span
            onClick={handleOpenModal}
            className="cursor-pointer text-textGrayDefault hover:text-textGrayDefaultHover font-medium underline"
          >
            clicking here
          </span>
        </p>

        <div className="mt-8 w-full border-b border-textGrayDefault rounded-md"></div>

        <Footer />

        <Contact isOpen={isModalOpen} closeModal={handleCloseModal} />
      </main>
    </>
  );
}
