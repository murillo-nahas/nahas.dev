"use client";

import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

import emailjs from "@emailjs/browser";

interface ContactProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function Contact({ isOpen, closeModal }: ContactProps) {
  const form = useRef(null);

  function sendEmail(event: any) {
    event.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        currentForm,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-slate-100 bg-opacity-50 flex items-center justify-center">
          <div className="p-8 shadow-lg w-3/12 h-auto bg-white rounded-md flex flex-col items-start justify-center">
            <div className="w-full flex justify-end">
              <IoMdClose
                onClick={closeModal}
                className="text-neutral-600 hover:text-neutral-400 cursor-pointer"
              />
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full mt-8 flex flex-col items-center justify-center"
            >
              <div className="w-full flex flex-col flex-start justify-center">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="rounded-md outline-gray-200 border border-slate-300 mt-1 h-12 p-2"
                  name="user_email"
                />
              </div>
              <div className="mt-8 w-full flex flex-col flex-start justify-center">
                <label>Message</label>
                <textarea
                  rows={10}
                  placeholder="Hi Murillo, I have a question about..."
                  className="rounded-md outline-gray-200 border border-slate-300 mt-1 p-2 "
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="cursor-pointer text-sm p-2 mt-8 w-full bg-neutral-600 hover:bg-neutral-400 rounded-md text-white font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
