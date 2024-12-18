"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderUpTo0, setIsHeaderUpTo0] = useState(false);
  useEffect(() => {
    let currentScrollY = window.scrollY;
    const handleIsHeaderVisible = () => {
      if (window.scrollY > 0) {
        setIsHeaderUpTo0(true);
        if (window.scrollY > currentScrollY) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      } else {
        setIsHeaderUpTo0(false);
      }
      currentScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleIsHeaderVisible);
  }, []);

  return (
    <div
      className={`flex justify-between fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 py-4 px-8 duration-500 ease-in-out ${
        isHeaderUpTo0
          ? isHeaderVisible
            ? "w-[60%] rounded-3xl py-8 px-10 bg-white top-5"
            : "w-[60%] rounded-3xl py-8 px-10 bg-white -top-52"
          : ""
      } `}
    >
      <div>
        <h2 className="text-xl ">
          Velorae <span className="text-xs ml-4">Traiteur évenementiel</span>
        </h2>
      </div>
      <ul className="flex gap-8 text-lg items-center">
        <li>Projets</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
