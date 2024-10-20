"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import tools from "@/public/tools.png";

export default function Contact() {
  const [lastnameValue, setLastnameValue] = useState("");
  const [firstnameValue, setFirstnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [objectValue, setObjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("firstname", firstnameValue);
    // formData.append("lastname", lastnameValue);
    // formData.append("email", emailValue);
    // formData.append("object", objectValue);
    // formData.append("message", messageValue);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black uppercase text-center mt-4">
        Contactez-<span className="text-yellow-400">Nous</span>
      </h1>
      <div className="grow flex flex-col md:flex-row justify-evenly py-10 w-full md:max-w-7xl">
        <form
          id="contact-form"
          className="max-w-[500px] w-full flex flex-col justify-center gap-5 p-12 shadow-lg rounded-lg bg-yellow-100"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex flex-col md:w-1/2">
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Nom"
                value={lastnameValue}
                className="ring-1 ring-black/20 rounded-sm px-2 w-full"
                onChange={(e) => setLastnameValue(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Prénom"
                value={firstnameValue}
                className="ring-1 ring-black/20 rounded-sm px-2 w-full"
                onChange={(e) => setFirstnameValue(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <input
              id="email"
              name="email"
              type="email"
              value={emailValue}
              placeholder="Email"
              className="ring-1 ring-black/20 rounded-sm px-2"
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input
              id="object"
              name="object"
              type="text"
              placeholder="Objet"
              value={objectValue}
              className="ring-1 ring-black/20 rounded-sm px-2"
              onChange={(e) => setObjectValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={messageValue}
              className="ring-1 ring-black/20 rounded-sm px-2"
              onChange={(e) => setMessageValue(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-bold p-2 mt-4 bg-yellow-400 rounded transition-colors hover:bg-yellow-700"
          >
            Envoyer
          </button>
        </form>
        <Image src={tools} alt="image d'outil de travaux" width={500} />
      </div>
    </div>
  );
}
