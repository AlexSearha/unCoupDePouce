// import Image from "next/image";
import React from "react";
import NavMenu from "../[components]/navMenu";

export default function Header() {
  return (
    <header
      id="header"
      className="px-2 py-6 flex justify-center border-b border-gray-500/15"
    >
      <div
        id="header--content"
        className="flex justify-between items-center w-full md:max-w-5xl px-6"
      >
        <div>Image</div>
        <NavMenu />
      </div>
    </header>
  );
}
