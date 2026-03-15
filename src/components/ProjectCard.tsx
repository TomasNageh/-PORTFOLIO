import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => (
  <div className="group relative rounded-lg p-4 transition-all duration-200 hover:bg-foreground/5 lg:hover:!opacity-100 lg:group-hover/section:opacity-50">
    <h3 className="font-medium leading-snug text-foreground">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-baseline text-foreground hover:text-primary focus-visible:text-primary"
        >
          {title}
          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
        </a>
      ) : (
        <span>{title}</span>
      )}
    </h3>
    <p className="mt-2 text-sm leading-normal text-dim">{description}</p>
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="tag-pill">{tag}</li>
      ))}
    </ul>
  </div>
);

export default ProjectCard;
