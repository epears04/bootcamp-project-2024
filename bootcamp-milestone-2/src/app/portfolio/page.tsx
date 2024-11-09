import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-torq">
        <h1 className="m-3 mb-0 text-2xl font-semibold text-gray-800">PORTFOLIO</h1>
            <div className="w-11/12 h-auto p-5 m-5 rounded-md shadow-lg bg-cream">
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Hack4Impact Personal Website</h2>
                    <Link href="/">
                        <Image
                            src="/bootcamp-project-2024/personalWebsite.png"
                            alt="screenshot of homepage"
                            width={500}
                            height={300}
                            className="w-full cursor-pointer max-w-[690px] m-3 rounded-md border-4 border-darkest-blue shadow-md"
                        />
                    </Link>
                    <p className="text-center text-md">
                        Developed a personal website using HTML, CSS, and JavaScript as a part of Hack4Impact's Starter Pack.
                        Converted HTML and CSS to TypeScript using Tailwindcss and React.
                    </p>
                    <Link href="/" className="mt-2 text-sm text-gray-600 hover:underline">Learn More</Link>
                </div>
            </div>
    </div>
  );
}