import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavMenu from "../[components]/navMenu";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" bg-slate-900 text-white py-12 flex md:justify-center"
    >
      <div className="flex flex-col gap-4 md:flex-row md:max-w-5xl px-6">
        <div id="footer--about-us" className="md:w-1/3">
          <h3>A Propos</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            dolorum.
          </p>
        </div>
        <div id="footer--menu" className="md:w-1/3">
          <h3>Menu</h3>
          <hr />
          <NavMenu isCol={true} />
        </div>
        <div id="footer--informations" className="md:w-1/3">
          <h3>Informations</h3>
          <hr />
          <div className="flex gap-2">
            <FontAwesomeIcon className="w-3" icon={faLocationDot} />
            <span>12 rue de marguerite, 77580 Guerard</span>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon className="w-3" icon={faEnvelope} />
            <a
              href="mailto:contact@uncoupdepouce.fr"
              className="transition-colors hover:text-gray-400"
            >
              contact@uncoupdepouce.fr
            </a>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon className="w-3" icon={faPhone} />
            <span>06.36.36.36.36</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
