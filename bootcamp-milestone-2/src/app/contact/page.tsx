"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_14b41df", // service id
        "template_1zy7snh", // template id
        formRef.current,
        "k1KIdDinXlAVEZ-2A" // public key
      );

      console.log("Email sent:", result.text);
      setStatus("success");
      formRef.current.reset(); 
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-torq">
      <h1 className="mb-5 text-3xl font-semibold text-gray-800">CONTACT</h1>
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-cream">
        <p className="mb-1 text-lg text-center text-gray-700">Please reach out to me to chat!</p>
        <form id="contact-form" className="space-y-4" ref={formRef} onSubmit={sendEmail}>
          <div className="flex gap-3">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-1/2 p-2 border rounded-md border-stone-300 focus:outline-none focus:ring-2 focus:ring-header-blue bg-light-cream"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-1/2 p-2 border rounded-md border-stone-300 focus:outline-none focus:ring-2 focus:ring-header-blue bg-light-cream"
            />
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            cols={45}
            rows={5}
            required
            className="w-full p-2 border rounded-md border-stone-300 focus:outline-none focus:ring-2 focus:ring-header-blue bg-light-cream"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full px-4 py-2 font-semibold text-cream transition-colors rounded-md cursor-pointer bg-darkest-blue hover:underline hover:bg-[#1D576E]"
          />
        </form>
        {status === "success" && (
          <p className="mt-4 text-sm font-semibold text-center text-green-600">
            Email sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm font-semibold text-center text-red-600">
            Failed to send email. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
}
