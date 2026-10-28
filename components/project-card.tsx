import Image from "next/image";
import type { Project } from "@/lib/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <a className="project-image-link" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live demo`}>
        <div className={`project-image-wrap${index > 1 ? " tall" : ""}`}>
          <Image
            className="project-image"
            data-image={project.imageKey}
            src={project.image}
            alt={project.imageAlt}
            width={1440}
            height={1026}
            sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 560px"
          />
        </div>
      </a>
      <div className="project-card-topline"><span>{project.category}</span><span>{project.year}</span></div>
      <h3>{project.name}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}
