import React from "react";
import Image from "next/image";
import { BsTerminalFill } from "react-icons/bs";
import { BlueButtonIn, GrayButtonIn } from "./BlueButtons";

export default function Hero() {
    return (
        <div className="bg-gray-50 dark:bg-black bg-hero-pattern dark:bg-hero-pattern-dark px-2 bg-cover bg-no-repeat bg-bottom">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-16 items-center">
                <div className="md:w-3/5 md:py-12 pt-8 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-medium dark:text-yellow-100">
                        I&apos;m Ajay Choudhury
                    </h1>
                    <h2 className="text-lg mt-2 flex justify-center md:justify-start items-center">
                        Welcome to my{" "}
                        <span className="flex items-center px-2 rounded mx-1 font-mono font-medium text-base bg-gray-300 dark:bg-gray-700">
                            <BsTerminalFill className="mr-1.5 dark:text-green-400" />
                            Digital
                        </span>{" "}
                        Space
                    </h2>
                    <p className="max-w-3xl mt-3">
                        I&apos;m a MS student in EECS@IISER Bhopal. I love
                        coding, cryptography, open-source projects and write
                        about code, design, and life. I like sci-fi, reading,
                        and football.
                    </p>
                    <div className="flex justify-center md:justify-start gap-3 mt-4">
                        <BlueButtonIn target="/portfolio" text="Portfolio" />
                        <GrayButtonIn target="/blog" text="Articles" />
                    </div>
                </div>
                <div className="md:w-2/5 w-4/6 relative">
                    <Image
                        src="/dev1.svg"
                        fill={true}
                        alt="Ajay Choudhury"
                        className="heroImg"
                    />
                </div>
            </div>
        </div>
    );
}
