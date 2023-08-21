import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "Contact me.",
};

export default function page() {
    return (
        <div className="fade-in px-2 md:px-4 py-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 min-h-[calc(100vh-180px)]">
                <Image
                    src="/contact/contact.svg"
                    width={0}
                    height={0}
                    alt="Let's connect"
                    className="w-2/6"
                />
                <h2 className="text-xl font-medium">Let&apos;s Connect</h2>
                <div className="flex items-center gap-6">
                    <Link href="mailto:ajaycc17@gmail.com" target="_blank">
                        <Image
                            src="/contact/gmail.svg"
                            width={50}
                            height={50}
                            alt="LinkedIn"
                            className="bg-gray-100 dark:bg-white rounded-xl"
                        />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/ajaycc17"
                        target="_blank"
                    >
                        <Image
                            src="/contact/linkedin.svg"
                            width={50}
                            height={50}
                            alt="LinkedIn"
                            className="bg-gray-100 dark:bg-white rounded-xl"
                        />
                    </Link>
                    <Link href="https://instagram.com/ajaycc17" target="_blank">
                        <Image
                            src="/contact/instagram.svg"
                            width={50}
                            height={50}
                            alt="LinkedIn"
                            className="bg-gray-100 dark:bg-white rounded-xl"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
