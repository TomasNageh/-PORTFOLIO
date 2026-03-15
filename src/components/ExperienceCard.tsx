import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
}

const ExperienceCard = ({ date, title, company, description, tags, link }: ExperienceCardProps) => (
  <div className="group relative grid grid-cols-8 gap-4 rounded-lg p-4 transition-all duration-200 hover:bg-foreground/5 lg:hover:!opacity-100 lg:group-hover/section:opacity-50">
    <header className="col-span-8 sm:col-span-2 font-mono-tag uppercase tracking-wide text-dimmer pt-1">
      {date}
    </header>
    <div className="col-span-8 sm:col-span-6">
      <h3 className="font-medium leading-snug text-foreground">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-baseline text-foreground hover:text-primary focus-visible:text-primary"
          >
            {title} · {company}
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
          </a>
        ) : (
          <span>{title} · {company}</span>
        )}
      </h3>
      <p className="mt-2 text-sm leading-normal text-dim">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="tag-pill">{tag}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceCard;
