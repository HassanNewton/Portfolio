import { motion } from "framer-motion";

const clients = [
  { name: "Disney", logo: "/disney-logo.svg" },
  { name: "Airbnb", logo: "/airbnb-logo.svg" },
  { name: "Microsoft", logo: "/microsoft-logo.svg" },
  { name: "Duolingo", logo: "/duolingo-logo.svg" },
  { name: "Netflix", logo: "/netflix-logo.svg" },
  { name: "Disney+", logo: "/disney-plus-logo.svg" },
];

export default function Clients() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex space-x-12 overflow-x-auto scrollbar-hide py-8">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                className="flex-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}

            {/* Duplicate logos for infinite scroll effect */}
            {clients.map((client) => (
              <motion.div
                key={`${client.name}-duplicate`}
                className="flex-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
