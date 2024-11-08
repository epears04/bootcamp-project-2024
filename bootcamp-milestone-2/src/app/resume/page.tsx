import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5 bg-torq">
      <h1 className="text-2xl font-semibold text-gray-900 no-underline">
      <a  href="http://localhost:3000/bootcamp-milestone-2/oct1Resume.pdf"
            download="ElliePearsonResume.pdf"
            target="_blank"
            className="hover:underline transition-colors duration-200">
            MY RESUME
    </a>
      </h1>
      <div className="w-11/12 p-5 mt-6 bg-cream shadow-lg rounded-lg">
        <section className="section mb-6">
          <h2 className="text-lg font-bold mb-3">Education</h2>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-1">
              <b>Cal Poly, San Luis Obispo</b>
            </h3>
            <p className="text-sm text-gray-800">
              B.S. in Computer Science | Expected Graduation June 2026
            </p>
          </div>
        </section>
        <section className="section mb-6">
          <h2 className="text-lg font-bold mb-3">Experience</h2>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-1">
              Software Engineering Research Assistant
            </h3>
            <p className="text-sm text-gray-800">
              Orfalea College of Business - Remote | June 2024 - September 2024
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
              <li>Utilized SQLite database management system to implement bookmark feature</li>
              <li>Developed multi-threading for a variety of processes to increase usability, efficiency, and increase functionality</li>
              <li>Upgraded the user interface through PyQt5 to improve user experience</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-1">ITS Student Assistant</h3>
            <p className="text-sm text-gray-800">
              San Luis Obispo, CA | May 2024 - Present
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
              <li>Managed IT tickets through Jira about a variety of network, hardware, and software issues in a timely manner</li>
              <li>Gained proficiency in both Windows and MAC devices/operating systems</li>
            </ul>
          </div>
        </section>
        <section className="section mb-6">
          <h2 className="text-lg font-bold mb-3">Projects</h2>
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-1">Linux Shell</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
              <li>Developed a custom Linux shell using C that mimics the basic functionality of standard shells like Bash</li>
              <li>Parsed input to support common commands such as cd, ls, mkdir, touch, and others by leveraging system calls and custom logic</li>
            </ul>
          </div>
        </section>
        <section className="section mb-6">
          <h2 className="text-lg font-bold mb-3">Coursework</h2>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
            <li>Data Structures, Design & Analysis of Algorithms, Systems Programming, Software Engineering</li>
            <li>Linear Algebra, Calculus III, Statistical Methods</li>
          </ul>
        </section>
        <section className="section mb-6">
          <h2 className="text-lg font-bold mb-3">Skills</h2>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
            <li>Python, C, Java</li>
            <li>Agile, Git, Visual Studio</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
