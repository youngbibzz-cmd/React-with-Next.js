import type { Metadata } from "next";
import Link from "next/link";
import { skills } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Jordan Lee, a frontend developer with a design-minded approach to building thoughtful digital experiences.",
};

const values = [
  { title: "Start with people", description: "The best digital experiences begin with listening. I make space for the people who will use what we build." },
  { title: "Sweat the details", description: "Care is in the small things: an accessible button, a quick page, a transition that feels natural." },
  { title: "Make it together", description: "Good work comes from generous collaboration, clear communication, and a little room to explore." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-width">
        <p className="eyebrow">A bit about me</p>
        <h1 className="page-title">Curiosity first.<br /><span>Craft always.</span></h1>
        <p className="page-lede">I’m Jordan, a frontend developer who cares about the people on the other side of the screen as much as the code behind it.</p>
      </section>
      <section className="about-content page-width">
        <div>
          <h2>Building useful things, with good people.</h2>
          <p>I started out drawn to the way design and technology could make everyday tasks feel simpler. That curiosity grew into a career building digital products with kind, ambitious teams.</p>
          <p>These days, I work across frontend development and interface design — helping ideas move from rough sketch to the sort of experience people enjoy coming back to. I’m happiest where thoughtful design meets well-crafted code.</p>
          <p>When I’m away from my desk, you’ll find me wandering the Oregon coast, trying a new recipe, or adding one more book to the nightstand stack.</p>
          <Link className="text-link" href="/contact">Have a project in mind? <span aria-hidden="true">↗</span></Link>
        </div>
        <aside className="about-aside">
          <p className="aside-label">A note on how I work</p>
          <p>Thoughtful doesn’t have to mean complicated. I bring a curious mind, a steady hand, and a genuine love of making useful things feel good to use.</p>
        </aside>
      </section>
      <section className="page-width section-space values-section">
        <p className="eyebrow">What matters to me</p>
        <div className="values-grid">
          {values.map((value, index) => (
            <article className="value-card" key={value.title}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="skills-section">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="eyebrow">A few tools in my kit</p><h2>Skills & <span>approach.</span></h2></div>
          </div>
          <div className="skill-groups">
            {skills.map((skill) => (
              <article className="skill-group" key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">{skill.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
