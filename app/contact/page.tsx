import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jordan Lee about your next digital product or frontend project.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero page-width">
        <p className="eyebrow">The start of something good</p>
        <h1 className="page-title">Tell me what<br /><span>you’re dreaming up.</span></h1>
        <p className="page-lede">Have a project, a question, or just want to say hello? I’d love to hear what you have in mind.</p>
      </section>
      <section className="contact-layout page-width">
        <div className="contact-details">
          <h2>Good work starts with a conversation.</h2>
          <p>Share a little about what you’re working on and I’ll get back to you soon. I’m currently open to select freelance projects and collaborations.</p>
          <a className="contact-email" href="mailto:hello@jordanlee.dev">hello@jordanlee.dev <span aria-hidden="true">↗</span></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
