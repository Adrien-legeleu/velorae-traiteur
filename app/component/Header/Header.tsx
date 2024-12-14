"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    let currentScrollY = window.scrollY;
    const handleIsHeaderVisible = () => {
      if (window.scrollY > currentScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      currentScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleIsHeaderVisible);
  }, []);

  return (
    <div
      className={`flex justify-between fixed top-0 w-full z-50 py-4 px-8 duration-500 ease-in-out ${
        isHeaderVisible ? "top-0" : "-top-full"
      } `}
    >
      <div>
        <h2 className="text-xl ">
          Velorae <span className="text-xs ml-4">Traiteur évenementiel</span>
        </h2>
      </div>
      <ul className="flex gap-8 text-lg items-center">
        <li>Projets</li>
        <li>Agence</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
