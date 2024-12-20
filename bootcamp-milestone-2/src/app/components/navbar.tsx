import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-header-blue text-cream">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-lg font-bold trackig-wide">
          <Link href="/">Ellie Pearson</Link>
        </h1>
        <div className="flex mr-8 space-x-6">
          <Link href="/" className="font-semibold text-cream hover:underline">Home</Link>
          <Link href="/blog" className="font-semibold text-cream hover:underline">Blog</Link>
          <Link href="/projects" className="font-semibold text-cream hover:underline">Portfolio</Link>
          <Link href="/resume" className="font-semibold text-cream hover:underline">Resume</Link>
          <Link href="/contact" className="font-semibold text-cream hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}