import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-10 bg-[#3C6373] text-[#D9D7C5]">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold trackig-wide">
          <Link href="/">Ellie Pearson</Link>
        </h1>
        <div className="flex space-x-6 mr-8">
          <Link href="/" className="text-[#D9D7C5] font-semibold hover:underline">Home</Link>
          <Link href="/blog" className="text-[#D9D7C5] font-semibold hover:underline">Blog</Link>
          <Link href="/portfolio" className="text-[#D9D7C5] font-semibold hover:underline">Portfolio</Link>
          <Link href="/resume" className="text-[#D9D7C5] font-semibold hover:underline">Resume</Link>
          <Link href="/contact" className="text-[#D9D7C5] font-semibold hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}