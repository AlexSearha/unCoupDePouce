"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu({ isCol = false }) {
  const pathName = usePathname();

  return (
    <nav id="nav-menu">
      <ul className={`flex ${isCol ? "flex-col" : "gap-2"}`}>
        <Link
          href="/"
          className={`transition-colors  ${
            pathName === "/"
              ? "text-yellow-500 hover:text-yellow-700"
              : "hover:text-yellow-700"
          }`}
        >
          <li>Accueil</li>
        </Link>
        <Link
          href="/services"
          className={`transition-colors  ${
            pathName === "/services"
              ? "text-yellow-500 hover:text-yellow-700"
              : "hover:text-yellow-700"
          }`}
        >
          <li>Services</li>
        </Link>
        <Link
          href="/a-propos"
          className={`transition-colors  ${
            pathName === "/a-propos"
              ? "text-yellow-500 hover:text-yellow-700"
              : "hover:text-yellow-700"
          }`}
        >
          <li>A Propos</li>
        </Link>
        <Link
          href="/contact"
          className={`transition-colors  ${
            pathName === "/contact"
              ? "text-yellow-500 hover:text-yellow-700"
              : "hover:text-yellow-700"
          }`}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
