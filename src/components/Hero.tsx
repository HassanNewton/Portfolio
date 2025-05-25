import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Star component for individual animated stars
const Star = ({ delay = 0, size = "small" }) => (
  <motion.div
    className={`absolute ${
      size === "large" ? "w-1.5 h-1.5" : "w-1 h-1"
    } rounded-full`}
    style={{
      background: `rgba(255, 255, 255, ${Math.random() > 0.5 ? "0.9" : "0.7"})`,
      boxShadow:
        "0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.3)",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.3, 1, 0.3],
      scale: [1, size === "large" ? 1.8 : 1.2, 1],
    }}
    transition={{
      duration: Math.random() * 2 + 2,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Shooting star component
const ShootingStar = () => (
  <motion.div
    className="absolute h-px bg-white"
    initial={{
      opacity: 0,
      top: "-5%",
      left: "50%",
      rotate: 35,
      scale: 0,
    }}
    animate={{
      opacity: [0, 1, 0],
      top: ["0%", "100%"],
      left: ["0%", "100%"],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 1.5,
      delay: Math.random() * 7,
      repeat: Infinity,
      repeatDelay: Math.random() * 10 + 5,
    }}
  >
    <div className="w-16 h-px bg-gradient-to-r from-white via-white to-transparent">
      <div className="w-full h-full bg-white/50 blur-[1px] animate-pulse" />
    </div>
  </motion.div>
);

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const handleTalkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiking(true);

    // Delay both the like reset and scroll
    setTimeout(() => {
      setIsLiking(false);
      // Smooth scroll to footer after the like animation
      const footer = document.querySelector("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const getProfileImage = () => {
    if (isLiking) return "/images/Person_like.svg";
    if (isHovering) return "/images/Person_winking.svg";
    return "/images/Person_Happy.svg";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Base star background */}
        <div className="absolute inset-0 bg-stars opacity-40" />

        {/* Animated stars layer */}
        <div className="absolute inset-0">
          {/* Large stars */}
          {[...Array(8)].map((_, i) => (
            <Star key={`large-${i}`} delay={i * 0.3} size="large" />
          ))}
          {/* Small stars */}
          {[...Array(25)].map((_, i) => (
            <Star key={`small-${i}`} delay={i * 0.2} size="small" />
          ))}
        </div>

        {/* Shooting stars */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <ShootingStar key={i} />
          ))}
        </div>

        {/* Cosmic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,41,0.7)_70%)]" />

        {/* Nebula-like effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20"
            onMouseEnter={() => !isLiking && setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={isLiking ? "liking" : isHovering ? "winking" : "normal"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                src={getProfileImage()}
                alt="Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </AnimatePresence>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-7 bg-primary rounded-full px-4 py-1 text-sm h-8 flex items-center justify-center whitespace-nowrap">
            <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Welcome to
            <br />
            my digital humble abode
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            I'm an independent computer engineer
            <br />
            My interest lies in problem solving, and making everyday life
            simpler
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={handleTalkClick}
          >
            Let's talk
            <span aria-hidden="true">👋</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
