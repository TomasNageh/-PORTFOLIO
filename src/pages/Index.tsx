import { useState, useEffect, useRef, useCallback } from "react";
import { Github, Mail, Phone } from "lucide-react";
import Spotlight from "@/components/Spotlight";
import NavLink from "@/components/NavLink";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

const sections = ["about", "experience", "projects"] as const;
type Section = (typeof sections)[number];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>({
    about: null,
    experience: null,
    projects: null,
  });

  const handleNavClick = useCallback((section: Section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((s) => {
      const el = sectionRefs.current[s];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Spotlight />
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-24">
          {/* Left Column - Sticky */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-24 pb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
                Tomas Nageh Adly
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground/80">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-normal text-dim">
                I build robust, accessible digital experiences for the web using modern technologies.
              </p>

              <nav className="mt-16 hidden lg:block">
                {sections.map((section) => (
                  <NavLink
                    key={section}
                    href={`#${section}`}
                    label={section}
                    isActive={activeSection === section}
                    onClick={() => handleNavClick(section)}
                  />
                ))}
              </nav>
            </div>

            <ul className="mt-8 flex items-center gap-5">
              <li>
                <a
                  href="https://github.com/TomasNageh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:tomasnageh10@gmail.com"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+201203589391"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column - Scrollable */}
          <main className="lg:w-1/2 lg:py-24 pb-24">
            {/* About */}
            <section
              id="about"
              ref={(el) => { sectionRefs.current.about = el; }}
              className="mb-24 scroll-mt-24"
            >
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
                About
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-dim">
                <p>
                  Dedicated Software Engineer with experience in developing web and software applications using
                  C, C++, C#, Python, and .NET technologies. Knowledgeable in Entity Framework, SQL, and MVC,
                  with additional expertise in frontend development using HTML, CSS, JavaScript, and Bootstrap.
                </p>
                <p>
                  Passionate about continuous learning, problem-solving, and building practical software solutions.
                  Currently pursuing a degree in Computer and Artificial Intelligence at Helwan University.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
                  and sharpening my skills through hands-on training and collaborative team projects.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section
              id="experience"
              ref={(el) => { sectionRefs.current.experience = el; }}
              className="group/section mb-24 scroll-mt-24"
            >
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
                Experience
              </h2>
              <div className="space-y-2">
                <ExperienceCard
                  date="Aug — Sep 2025"
                  title="Python Training"
                  company="National Telecommunication Institute (NTI)"
                  description="Acquired practical experience in Python programming and enhanced problem-solving techniques. Gained exposure to freelancing fundamentals and applying technical skills to real-world projects. Improved coding practices and logical thinking through 120 hours of hands-on training."
                  tags={["Python", "Problem Solving", "Freelancing"]}
                />
                <ExperienceCard
                  date="Jul — Aug 2025"
                  title="Web Development Intern"
                  company="ITI Summer Code Camp"
                  description="Gained hands-on experience in C#, ASP.NET MVC, Entity Framework, and SQL basics. Built and tested web applications, integrating frontend with backend systems. Collaborated in a team environment, applying software engineering concepts like OOP and design patterns."
                  tags={["C#", "ASP.NET MVC", "Entity Framework", "SQL", "Bootstrap"]}
                />
                <ExperienceCard
                  date="Sep 2022 — Sep 2023"
                  title="AI & Robotics Track"
                  company="Digital Egypt Cubs Initiative (DECI)"
                  description="Completed intensive national training in the AI and Robotics track under Egypt's MCIT. Learned core programming concepts using Python, with hands-on projects focusing on logic building, automation, and AI-based thinking. Gained practical experience in embedded systems and robotics fundamentals."
                  tags={["Python", "AI", "Robotics", "Embedded Systems"]}
                />
              </div>
            </section>

            {/* Projects */}
            <section
              id="projects"
              ref={(el) => { sectionRefs.current.projects = el; }}
              className="group/section mb-24 scroll-mt-24"
            >
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
                Projects
              </h2>
              <div className="space-y-2">
                <ProjectCard
                  title="Swift Air — Airline Management System"
                  description="Designed and developed a web-based airline management system to streamline flight operations and passenger management. Built using ASP.NET MVC, Entity Framework, and SQL. Implemented flight scheduling, passenger registration, and boarding management with a complete System User Guide."
                  tags={["ASP.NET MVC", "Entity Framework", "SQL", "OOP", "Design Patterns"]}
                />
                <ProjectCard
                  title="E-Commerce Website"
                  description="Developed a fully responsive e-commerce website as a semester-long university project. Built product listings, best-sellers section, and clean UI using HTML5 and CSS3. Added interactivity using vanilla JavaScript and practiced version control via Git and GitHub."
                  tags={["HTML5", "CSS3", "JavaScript", "Git"]}
                  link="https://github.com/TomasNageh"
                />
                <ProjectCard
                  title="DECI — Graduation Project"
                  description="Designed and developed a Python-based interactive text game as part of the DECI graduation project. Implemented game logic, score tracking, and multiple scenario-based decision trees using Python fundamentals."
                  tags={["Python", "Game Logic", "Git"]}
                  link="https://github.com/TomasNageh"
                />
              </div>
            </section>

            {/* Footer */}
            <footer className="text-sm text-dimmer">
              <p>
                Built with{" "}
                <a href="https://react.dev" className="font-medium text-dim hover:text-primary" target="_blank" rel="noopener noreferrer">
                  React
                </a>{" "}
                and{" "}
                <a href="https://tailwindcss.com" className="font-medium text-dim hover:text-primary" target="_blank" rel="noopener noreferrer">
                  Tailwind CSS
                </a>
                . Inspired by{" "}
                <a href="https://brittanychiang.com" className="font-medium text-dim hover:text-primary" target="_blank" rel="noopener noreferrer">
                  Brittany Chiang
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
