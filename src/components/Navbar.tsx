import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Works", href: "#works" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-background-light/10 backdrop-blur-lg" />

      {/* Navbar content */}
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <motion.div className="hidden md:flex items-center justify-center space-x-1 bg-background-light/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-full"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <motion.button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-white/80 hover:text-white bg-background-light/20 backdrop-blur-md border border-white/10"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          id="mobile-menu"
          className="md:hidden relative"
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background-light/20 backdrop-blur-md mx-4 rounded-2xl border border-white/10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white rounded-xl"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 },
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
}
