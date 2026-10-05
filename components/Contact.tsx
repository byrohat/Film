"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconCheck, IconMail } from "./icons";

// Optional: set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) to deliver
// submissions. Without it the form validates and confirms on the client only.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const interests = [
  "Private English Training",
  "Private Russian Training",
  "Language Consulting",
  "Academic & University Guidance",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-2 block w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3.5 text-navy-900 placeholder:text-navy-900/35 transition-colors focus:border-royal-500 focus:outline-none focus:ring-4 focus:ring-royal-500/10";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading
            id="contact-title"
            align="left"
            eyebrow="Contact"
            title="Let’s Talk About Your Future."
            description="Interested in private Russian or English lessons, or looking for academic guidance? Share a few details and our team will get back to you."
          />
          <Reveal delay={100}>
            <ul className="mt-10 space-y-4 text-slate-text">
              {[
                "Personalized response to every inquiry",
                "Language level and goals discussed first",
                "No commitment required",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-royal-100 text-royal-600">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-navy-900/8 bg-white p-7 shadow-xl shadow-navy-900/5 sm:p-10">
            {status === "sent" ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-500">
                  <IconCheck className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium text-navy-900">Thank you.</h3>
                <p className="mt-3 max-w-sm text-slate-text">
                  Your message has been received. We’ll be in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-semibold text-royal-600 hover:text-navy-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-navy-900 sm:col-span-2">
                  Name
                  <input name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-navy-900">
                  Email
                  <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-navy-900">
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+00 000 000 0000" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-navy-900 sm:col-span-2">
                  I’m interested in
                  <select name="interest" defaultValue={interests[0]} className={inputClass}>
                    {interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-navy-900 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals…"
                    className={`${inputClass} resize-y`}
                  />
                </label>

                {status === "error" && (
                  <p className="text-sm text-red-600 sm:col-span-2" role="alert">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
                >
                  <IconMail className="h-5 w-5 text-gold-400" />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
