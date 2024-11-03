import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
        <nav className="navbar">
            <h1 className="logo"><a href="index.html">Ellie Pearson</a></h1>
            <div className="nav-list">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </div>
        </nav>
    </header>
  );
}