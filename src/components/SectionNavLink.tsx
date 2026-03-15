import { cn } from "@/lib/utils";

interface SectionNavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SectionNavLink = ({ href, label, isActive, onClick }: SectionNavLinkProps) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="group flex items-center gap-4 py-3"
  >
    <span
      className={cn(
        "block h-px transition-all duration-300",
        isActive ? "w-16 bg-foreground" : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
      )}
    />
    <span
      className={cn(
        "text-xs font-bold uppercase tracking-widest transition-colors duration-300",
        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
      )}
    >
      {label}
    </span>
  </a>
);

export default SectionNavLink;
