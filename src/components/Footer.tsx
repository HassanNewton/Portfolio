import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background-light/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Let's Connect and Create Something Amazing!
        </motion.h2>

        <motion.a
          href="#contact"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark rounded-full text-white font-medium transition-colors"
        >
          Contact Me
        </motion.a>

        <div className="mt-12 flex justify-center gap-6">
          {["x", "linkedin", "github", "mail"].map((social, i) => (
            <motion.a
              key={social}
              href={`#${social}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="w-10 h-10 rounded-full bg-white/60 hover:bg-white flex items-center justify-center transition-colors"
            >
              <img
                src={`/images/icons/${social}.svg`}
                alt={social}
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
