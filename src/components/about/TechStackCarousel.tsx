import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import StackIcon from "tech-stack-icons";
import { useRef } from "react";

// Split tech stacks into two rows
const techStackRows = [
  [
    { name: "React", icon: "reactjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "AWS", icon: "aws" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
    { name: "Java", icon: "java" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Firebase", icon: "firebase" },
    { name: "MySQL", icon: "mysql" },
  ],
  [
    { name: "Git", icon: "git" },
    { name: "Azure", icon: "azure" },
    { name: "C++", icon: "c++" },
    { name: "C#", icon: "csharp" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "js" },
    { name: "OpenAI", icon: "openai" },
    { name: "PowerShell", icon: "powershell" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "Supabase", icon: "supabase" },
  ],
];

const hideScrollbarStyle = {
  scrollbarWidth: "none" as const,
  msOverflowStyle: "none" as const,
  WebkitOverflowScrolling: "touch" as const,
} as const;

function ScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("left")}
          className="bg-background-light rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      <div
        ref={containerRef}
        style={hideScrollbarStyle}
        className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("right")}
          className="bg-background-light rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </div>
  );
}

export default function TechStackCarousel() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-1"
    >
      <div className="bg-background-light rounded-2xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <CodeBracketIcon className="w-6 h-6 text-primary" />
          <div>
            <h3 className="text-xl font-bold mb-1">My Tech Stacks</h3>
            <p className="text-white/70">Tools I work with</p>
          </div>
        </div>
        <ScrollContainer>
          <div className="flex flex-col gap-4 min-w-max px-8">
            {techStackRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-4">
                {row.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (rowIndex * row.length + i) * 0.05 }}
                    className="w-16 h-16 rounded-xl bg-background/50 p-3 flex flex-col items-center justify-center gap-1 flex-shrink-0"
                  >
                    <StackIcon name={tech.icon} className="w-6 h-6" />
                    <span className="text-[10px] text-white/70">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
    </motion.div>
  );
}
