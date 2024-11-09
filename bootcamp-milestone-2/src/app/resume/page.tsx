import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5 bg-torq">
      <h1 className="text-2xl font-semibold text-gray-900 no-underline">
      <a  href="http://localhost:3000/bootcamp-milestone-2/oct1Resume.pdf"
            download="ElliePearsonResume.pdf"
            target="_blank"
            className="text-gray-800 transition-colors duration-200 hover:underline">
            MY RESUME
    </a>
      </h1>
      <div className="w-11/12 p-5 mt-6 rounded-lg shadow-lg bg-cream">
        <section className="mb-6 section">
          <h2 className="mb-3 text-lg font-bold">Education</h2>
          <div className="mb-4">
            <h3 className="mb-1 font-semibold text-md">
              <b>Cal Poly, San Luis Obispo</b>
            </h3>
            <p className="text-sm text-gray-800">
              B.S. in Computer Science | Expected Graduation June 2026
            </p>
          </div>
        </section>
        <section className="mb-6 section">
          <h2 className="mb-3 text-lg font-bold">Experience</h2>
          <div className="mb-4">
            <h3 className="mb-1 font-semibold text-md">
              Software Engineering Research Assistant
            </h3>
            <p className="text-sm text-gray-800">
              Orfalea College of Business - Remote | June 2024 - September 2024
            </p>
            <ul className="pl-5 mt-2 text-sm text-gray-800 list-disc">
              <li>Utilized SQLite database management system to implement bookmark feature</li>
              <li>Developed multi-threading for a variety of processes to increase usability, efficiency, and increase functionality</li>
              <li>Upgraded the user interface through PyQt5 to improve user experience</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="mb-1 font-semibold text-md">ITS Student Assistant</h3>
            <p className="text-sm text-gray-800">
              San Luis Obispo, CA | May 2024 - Present
            </p>
            <ul className="pl-5 mt-2 text-sm text-gray-800 list-disc">
              <li>Managed IT tickets through Jira about a variety of network, hardware, and software issues in a timely manner</li>
              <li>Gained proficiency in both Windows and MAC devices/operating systems</li>
            </ul>
          </div>
        </section>
        <section className="mb-6 section">
          <h2 className="mb-3 text-lg font-bold">Projects</h2>
          <div className="mb-4">
            <h3 className="mb-1 font-semibold text-md">Linux Shell</h3>
            <ul className="pl-5 mt-2 text-sm text-gray-800 list-disc">
              <li>Developed a custom Linux shell using C that mimics the basic functionality of standard shells like Bash</li>
              <li>Parsed input to support common commands such as cd, ls, mkdir, touch, and others by leveraging system calls and custom logic</li>
            </ul>
          </div>
        </section>
        <section className="mb-6 section">
          <h2 className="mb-3 text-lg font-bold">Coursework</h2>
          <ul className="pl-5 mt-2 text-sm text-gray-800 list-disc">
            <li>Data Structures, Design & Analysis of Algorithms, Systems Programming, Software Engineering</li>
            <li>Linear Algebra, Calculus III, Statistical Methods</li>
          </ul>
        </section>
        <section className="mb-6 section">
          <h2 className="mb-3 text-lg font-bold">Skills</h2>
          <ul className="pl-5 mt-2 text-sm text-gray-800 list-disc">
            <li>Python, C, Java</li>
            <li>Agile, Git, Visual Studio</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
