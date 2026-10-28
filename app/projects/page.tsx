import type { Metadata } from "next";
import { projects } from "@/lib/portfolio";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of frontend development and digital product work by Jordan Lee.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero page-width">
        <p className="eyebrow">A selection of recent work</p>
        <h1 className="page-title">Useful things,<br /><span>made with care.</span></h1>
        <p className="page-lede">A few projects that brought thoughtful teams and good ideas together. Each one started with a question and grew through collaboration.</p>
      </section>
      <section className="projects-page page-width">
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      </section>
    </main>
  );
}
