export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageKey: string;
  imageAlt: string;
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    name: "Atlas Analytics",
    category: "Product design · Dashboard",
    year: "2025",
    description: "A calmer way for growing teams to find the signal in their everyday metrics.",
    image: "/images/atlas-dashboard.jpg",
    imageKey: "atlas",
    imageAlt: "Workspace with a laptop displaying analytics charts",
    githubUrl: "https://github.com/yourusername/atlas-analytics",
    demoUrl: "https://atlas-analytics-demo.vercel.app",
  },
  {
    name: "Sunday Studio",
    category: "Brand · E-commerce",
    year: "2024",
    description: "A warm, editorial storefront for an independent homewares brand.",
    image: "/images/studio-site.jpg",
    imageKey: "studio",
    imageAlt: "Bright, thoughtfully styled creative studio",
    githubUrl: "https://github.com/yourusername/sunday-studio",
    demoUrl: "https://sunday-studio-demo.vercel.app",
  },
  {
    name: "Orbit Finance",
    category: "Mobile · Fintech",
    year: "2024",
    description: "A friendly money companion that makes the next right step feel simple.",
    image: "/images/orbit-mobile.jpg",
    imageKey: "orbit",
    imageAlt: "Colorful, modern mobile product interface",
    githubUrl: "https://github.com/yourusername/orbit-finance",
    demoUrl: "https://orbit-finance-demo.vercel.app",
  },
];

export const skills = [
  {
    name: "Frontend development",
    summary: "Fast, accessible interfaces with details that feel just right.",
    category: "Build",
    description: "Thoughtful engineering for responsive products, with performance and accessibility built in.",
    tools: ["React", "Next.js", "TypeScript", "CSS", "HTML"],
  },
  {
    name: "Interface design",
    summary: "Clear visual systems that help products feel unmistakably themselves.",
    category: "Design",
    description: "From early wireframes to polished UI, I help make complex products feel intuitive.",
    tools: ["Figma", "Design systems", "Prototyping", "Interaction"],
  },
  {
    name: "Product thinking",
    summary: "Turning real user needs into useful, focused product experiences.",
    category: "Collaborate",
    description: "A curious, collaborative approach to solving the right problem before writing code.",
    tools: ["User research", "Accessibility", "Iteration", "Documentation"],
  },
  {
    name: "Creative coding",
    summary: "Small touches of motion and personality, made for the browser.",
    category: "Explore",
    description: "Bringing static layouts to life with intentional motion and playful frontend experiments.",
    tools: ["Animation", "SVG", "Motion", "Responsive UI"],
  },
];
