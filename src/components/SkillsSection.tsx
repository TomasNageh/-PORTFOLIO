import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C", "C++", "C#", "Python", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ASP.NET MVC", ".NET", "Entity Framework", "Bootstrap", "React"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Visual Studio", "VS Code", "SQL Server"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "Design Patterns", "Data Structures", "Problem Solving", "MVC Architecture"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SkillsSection = () => (
  <div className="space-y-8">
    {skillCategories.map((category) => (
      <div key={category.title}>
        <h3 className="mb-3 text-sm font-medium text-foreground/80">
          {category.title}
        </h3>
        <motion.ul
          className="flex flex-wrap gap-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {category.skills.map((skill) => (
            <motion.li key={skill} variants={item} className="tag-pill">
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    ))}
  </div>
);

export default SkillsSection;
