import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import StackIcon from "tech-stack-icons";
import { useRef, useState } from "react";

const techStacks = [
  { name: "React", icon: "reactjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
  { name: "Azure", icon: "azure" },
  { name: "C++", icon: "c++" },
  { name: "C#", icon: "csharp" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Next.js", icon: "nextjs" },
];

function DraggableContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX - (ref.current?.offsetLeft ?? 0));
    setScrollLeft(ref.current?.scrollLeft ?? 0);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const x = clientX - (ref.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2;
    if (ref.current) {
      ref.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.pageX);
  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.pageX);
  };
  const handleMouseUp = () => handleEnd();

  const handleTouchStart = (e: React.TouchEvent) =>
    handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };
  const handleTouchEnd = () => handleEnd();

  return (
    <div
      ref={ref}
      className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
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
        <DraggableContainer>
          <div className="flex gap-4 min-w-max">
            {techStacks.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="w-16 h-16 rounded-xl bg-background/50 p-3 flex flex-col items-center justify-center gap-1 flex-shrink-0"
              >
                <StackIcon name={tech.icon} className="w-6 h-6" />
                <span className="text-[10px] text-white/70">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </DraggableContainer>
      </div>
    </motion.div>
  );
}
