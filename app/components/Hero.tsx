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
        <div className="fade-in py-8 px-2 md:px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-6 gap-4">
                <div className="col-span-6 lg:col-span-4 text-center md:text-left flex flex-col justify-center font-head font-medium mb-4 lg:mb-0">
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
                    <p className="mt-4">
                        I&apos;m a BS-MS graduate in EECS and DSE from IISER
                        Bhopal. Actively looking for SDE/SWE roles/internships.
                        I am interested in full-stack development and machine
                        learning.
                    </p>
                    <div className="flex justify-center md:justify-start gap-3 mt-6">
                        <BlackButtonIn target="/portfolio" text="Portfolio" />
                        <TransparentButton
                            target="https://drive.google.com/file/d/1GX84CaySNhmvIsBYm-RzMuyM-kEjzxjE/view"
                            text="My Resume"
                        />
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 relative rounded-3xl">
                    <img
                        src={`/${props.image}`}
                        alt="Ajay Choudhury"
                        className="rounded-3xl"
                    />
                </div>
                <div className="h-full hidden sm:block lg:hidden col-span-3 lg:col-span-2 relative bg-gray-300 dark:bg-gray-800 rounded-3xl p-6 font-head font-medium">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <h2 className="flex items-center font-semibold text-xl border-b border-gray-400 pb-2 mb-3 dark:text-blue-300">
                                All Projects
                                <sup>
                                    <MdArrowOutward />
                                </sup>
                            </h2>
                            <Link
                                href="/"
                                className="border-b border-gray-400 pb-2 flex items-center justify-between"
                            >
                                Word Counter
                                <RiArrowRightLine />
                            </Link>
                            <Link
                                href="/"
                                className="border-b border-gray-400 pb-2 flex items-center justify-between"
                            >
                                Weather App
                                <RiArrowRightLine />
                            </Link>
                            <Link
                                href="/"
                                className="border-b border-gray-400 pb-2 flex items-center justify-between"
                            >
                                Expense Tracker
                                <RiArrowRightLine />
                            </Link>
                            <Link
                                href="/"
                                className=" flex items-center justify-between"
                            >
                                ChatBox: Group Chat
                                <RiArrowRightLine />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="bg-black inline-flex items-center gap-2 text-white py-1 px-3 rounded-lg"
                            >
                                <RiGithubFill /> See on GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
