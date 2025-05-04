"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { BlackButtonIn, TransparentButton } from "./BlueButtons";
import { MdArrowOutward } from "react-icons/md";
import { RiGithubFill, RiArrowRightLine } from "react-icons/ri";

export default function Hero(props: { image: string }) {
  const dyno = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(dyno.current, {
      strings: ["Proud Indian", "Software Engineer", "AI/ML Enthusiast"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="fade-in py-32 px-2 md:px-4 bg-white dark:bg-[#1b1f21] hero-section">
      <img src="./python.svg" className="deco deco-1" alt="" />
      <img src="./tor.svg" className="deco deco-2" alt="" />
      <img src="./google.svg" className="deco deco-3" alt="" />
      <img src="./linux.svg" className="deco deco-4" alt="" />
      <img src="./calculator.svg" className="deco deco-5" alt="" />
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center flex flex-col justify-center font-head font-medium mb-4 lg:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold dark:text-yellow-100">
            Hello, I&apos;m Ajay Choudhury
          </h1>
          <h2 className="text-xl mt-6">
            I am a{" "}
            <span
              ref={dyno}
              className="border-b border-gray-400 text-lg text-blue-700 dark:text-yellow-400 font-mono"
            ></span>
          </h2>
          <p className="mt-4 md:max-w-4xl mx-auto font-sans">
            I&apos;m master's student in CSE at IIT Kharagpur, a BS-MS graduate in EECS and DSE from IISER Bhopal.
            Actively looking for SDE/SWE roles/internships. I am interested in
            full-stack development, cyber-security and machine learning. This is a collection of my projects, notes, experiences and other records.
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <BlackButtonIn target="/portfolio" text="Portfolio" />
            <TransparentButton
              target="https://drive.google.com/file/d/1GX84CaySNhmvIsBYm-RzMuyM-kEjzxjE/view"
              text="My Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
