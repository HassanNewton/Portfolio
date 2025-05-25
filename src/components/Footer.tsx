import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [showAnimations, setShowAnimations] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAnimations(true);
    setTimeout(() => {
      setShowAnimations(false);
      window.location.href = "mailto:hassan.2001@live.com";
    }, 1500);
  };

  const animations = [
    { top: "-7rem", left: "50%", delay: 0, rotate: -15 },
    { top: "-5rem", left: "30%", delay: 0.1, rotate: 15 },
    { top: "-5rem", left: "70%", delay: 0.2, rotate: -10 },
  ];

  return (
    <footer
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background-light/50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Let's Connect and Create Something Amazing!
        </motion.h2>

        <div className="relative">
          <AnimatePresence>
            {showAnimations &&
              animations.map((anim, index) => (
                <motion.img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/images/Person_fisting.svg`}
                  alt="Fist bump"
                  className="w-24 h-24 absolute"
                  style={{
                    left: anim.left,
                    top: anim.top,
                    transform: `translateX(-50%) rotate(${anim.rotate}deg)`,
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: anim.delay,
                    ease: "backOut",
                  }}
                />
              ))}
          </AnimatePresence>
          <motion.a
            href="mailto:hassan.2001@live.com"
            onClick={handleContactClick}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark rounded-full text-white font-medium transition-colors"
          >
            Contact Me
          </motion.a>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {[
            {
              name: "linkedin",
              url: "https://www.linkedin.com/in/hassanhussin/",
            },
            {
              name: "github",
              url: "https://github.com/HassanNewton",
            },
            {
              name: "mail",
              url: "mailto:hassan.2001@live.com",
            },
            {
              name: "x",
              url: "https://x.com/home", // You can update this with your Twitter URL when available
            },
          ].map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.name === "mail" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="w-10 h-10 rounded-full bg-white/60 hover:bg-white flex items-center justify-center transition-colors"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/${social.name}.svg`}
                alt={social.name}
                className="w-5 h-5"
              />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-white/50 text-sm"
        >
          © {new Date().getFullYear()} Hassan Hussin. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
