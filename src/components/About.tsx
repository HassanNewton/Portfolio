import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import {
  BookOpenIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ArrowDownTrayIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import StackIcon from "tech-stack-icons";
import { useRef, useState, useEffect } from "react";
import MyPersona from "./about/MyPersona";
import TechStackCarousel from "./about/TechStackCarousel";
import CurrentReading from "./about/CurrentReading";
import LocationMap from "./about/LocationMap";

// Mock data for skills and experience
const skills = [
  "EMPATHY",
  "ACCESSIBILITY",
  "UI/UX",
  "FRONTEND",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND",
  "NODE.JS",
];

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

const personalTraits = [
  "Traveler 🌍",
  "Food Enthusiast 🍜",
  "Problem Solver 🧩",
  "Continuous Learner 📚",
  "Team Player 🤝",
  "Tech Explorer 🚀",
];

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Educator Consultant – Software Development",
    company: "Newton Kompetensutveckling Yh",
    period: "2024 – Present",
    description:
      "Delivered lectures and hands-on training in .NET, OOP, front-end development, and databases. Designed course plans and supervised student projects, bridging academic teaching with real industry practices.",
  },
  {
    role: "Educator Consultant – Mathematics",
    company: "Newton Kompetensutveckling Yh",
    period: "2023 – Present",
    description:
      "Taught mathematics to adult learners in civil and construction engineering programs. Adapted materials to various learning needs and supported student success.",
  },
  {
    role: "Freelance Consultant – AI & Web Development",
    company: "Bilcleaniken AB",
    period: "2024 – Present",
    description:
      "Built company website using React and Node.js. Developed an AI service with Python and TensorFlow for automatic identification and management of new Tesla vehicles, streamlining vehicle intake with OCR and image recognition.",
  },
  {
    role: "Software Engineer – AI & Machine Learning Thesis",
    company: "Hulo IT",
    period: "2024",
    description:
      "Created an AI microservice for intelligent invoice data extraction with 93% accuracy. Leveraged OCR, NLP, and TensorFlow to automate document processing and improve recognition efficiency by 50%.",
  },
  {
    role: "Project Manager – ETSF20 Software Development for Large Projects",
    company: "Lund University of Technology",
    period: "2023",
    description:
      "Led a 25-member student team in delivering a full-scale software product. Ensured collaboration, progress, and quality delivery throughout the project.",
  },
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

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-16">
            <h1 className="text-2xl font-bold">Hassan Hussin</h1>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
                onClick={() => {
                  window.open("/CV_HassanHussin.pdf", "_blank");
                }}
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Download CV
              </motion.button>
            </div>
          </nav>

          {/* Headline */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              The story of me being
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              I'm passionate about creating user-friendly digital experiences
              that make a difference in people's lives.
            </motion.p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-background-light/50"
              >
                <img
                  src={`/images/about-${i}.jpg`}
                  alt={`About me ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="overflow-x-auto pb-4 mb-16">
            <div className="flex gap-3 min-w-max px-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-light/50">
        <div className="max-w-5xl mx-auto lg:px-8">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            Let's know more about me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <TechStackCarousel />
              <CurrentReading />
            </div>

            <div className="lg:col-span-1 space-y-8">
              <LocationMap />
              <MyPersona />
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto lg:px-8">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-center mb-4"
          >
            MY EXPERIENCES
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            Where I've Been Employed
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <p className="text-white/60 mt-1 italic">{exp.company}</p>
                    <p className="text-white/60 mt-1 italic">{exp.period}</p>
                  </div>

                  <div>
                    <p className="text-white/80">{exp.description}</p>
                  </div>
                </div>

                {i < experiences.length - 1 && (
                  <div className="absolute -bottom-6 left-0 right-0">
                    <div className="border-t border-white/10 w-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
