import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-10 bg-header-blue text-cream">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold trackig-wide">
          <Link href="/">Ellie Pearson</Link>
        </h1>
        <div className="flex space-x-6 mr-8">
          <Link href="/" className="text-cream font-semibold hover:underline">Home</Link>
          <Link href="/blog" className="text-cream font-semibold hover:underline">Blog</Link>
          <Link href="/portfolio" className="text-cream font-semibold hover:underline">Portfolio</Link>
          <Link href="/resume" className="text-cream font-semibold hover:underline">Resume</Link>
          <Link href="/contact" className="text-cream font-semibold hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}