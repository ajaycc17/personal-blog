"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { RiArticleLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { BsCheckCircleFill } from "react-icons/bs";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "DSA Record",
    description: "My DSA Record",
};

export default function Dsa() {
    const [probs, setProbs] = useState([]);
    useEffect(() => {
        axios
            .get("/data/dsa.json")
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                setProbs(data);
            })
            .catch((err) => console.log(err));
    }, [probs]);
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto">
                {probs.map((prob: any) => {
                    return (
                        <div
                            className={`flex justify-between items-center p-2 border-b bg-${prob.color}-400/10`}
                            key={prob.title}
                        >
                            <h2 className="flex flex-col">
                                <span className={`text-xs ml-6 text-gray-400`}>
                                    {prob.tag} &middot; {prob.difficulty}
                                </span>
                                <div className="flex items-center gap-2">
                                    <BsCheckCircleFill className="text-green-600" />
                                    {prob.title}
                                </div>
                            </h2>
                            <div className="flex items-center gap-4">
                                <Link href={prob.solution}>
                                    <RiArticleLine className="w-6 h-6 bg-blue-50 text-blue-800 rounded-md p-1" />
                                </Link>
                                <Link href={prob.link}>
                                    <SiLeetcode className="w-6 h-6 text-black bg-yellow-100 rounded-full p-1" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
