import Image from "next/image";
import Link from "next/link";
import { projects, skills } from "@/lib/portfolio";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for select projects</p>
            <h1>I make the web feel <span>a little more human.</span></h1>
            <p className="hero-description">
              Hey, I’m Jordan — a frontend developer turning thoughtful ideas into
              clear, useful, and quietly delightful digital experiences.
            </p>
            <div className="button-row">
              <Link className="button button-dark" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
              <Link className="button button-light" href="/contact">Let’s talk <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-meta">
              <span>Based in Portland, OR</span>
              <span className="meta-divider" aria-hidden="true" />
              <span>Working worldwide</span>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame">
              <Image
                className="hero-portrait"
                src="/images/profile.jpg"
                alt="Portrait of Jordan Lee"
                width={960}
                height={1440}
                priority
                sizes="(max-width: 760px) 76vw, 430px"
              />
            </div>
            <div className="portrait-note"><span className="note-star">✳</span><span>Good work, good people,<br />and a little curiosity.</span></div>
            <span className="portrait-index">01 — 04</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="Introduction">
          <div className="page-width intro-strip-inner">
            <p>Design-minded developer <span>✳</span> Detail-obsessed builder <span>✳</span> Always learning</p>
            <a href="mailto:hello@jordanlee.dev">hello@jordanlee.dev <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section page-width section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I bring to the table</p>
              <h2>Good ideas, built <span>with care.</span></h2>
            </div>
            <Link className="text-link" href="/about">More about me <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="skill-preview">
            {skills.slice(0, 4).map((skill, index) => (
              <div className="skill-preview-item" key={skill.name}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{skill.name}</h3>
                <p>{skill.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-band">
          <div className="page-width section-space">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work · 2022—2025</p>
                <h2>Made to make <span>a difference.</span></h2>
              </div>
              <Link className="text-link" href="/projects">All projects <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="project-grid">
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="closing-cta page-width">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2>Let’s make something <span>meaningful.</span></h2>
          <Link className="button button-dark" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
    </>
  );
}
