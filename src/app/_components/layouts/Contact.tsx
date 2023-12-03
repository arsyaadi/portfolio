import React from "react";
import { Button } from "../common";
import { config } from "@/app/config";

const Contact = () => {
  return (
    <div id="contact" className="pt-20 pb-96">
      <div className="text-center flex w-full justify-center gap-y-4 flex-col">
        <h2 className="text-aquamarine font-SF-mono">
          <span>04.</span>
          What's Next?
        </h2>
        <h2 className="text-fog text-6xl font-bold font-Calibre">Get In Touch</h2>

        <p className="max-w-xl font-Calibre text-regent-gray text-base">I'm currently seeking freelance or full-time opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I’ll do my best to get back to you!</p>

        <a href={`mailto:${config.email}`} className="button w-1/4 h-1/2 mx-auto">Say Hi!</a>
      </div>
    </div>
  );
};

export default Contact;
