import Image from "next/image";

export default function NotFound() {
    return (
        <div className="fade-in py-8 px-2">
            <div className="max-w-6xl mx-auto flex flex-col gap-4 justify-center items-center min-h-[calc(100vh-180px)]">
                <Image
                    src="/searchNotFound.svg"
                    width={0}
                    height={0}
                    alt="404 Error"
                    className="w-2/6"
                />
                <h2 className="text-xl">404</h2>
                <p>This page could not be found.</p>
            </div>
        </div>
    );
}
