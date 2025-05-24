import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/outline";

const personalTraits = [
  "Traveler 🌍",
  "Food Enthusiast 🍜",
  "Problem Solver 🧩",
  "Continuous Learner 📚",
  "Team Player 🤝",
  "Tech Explorer 🚀",
];

export default function MyPersona() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-1"
    >
      <div className="bg-background-light rounded-2xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <UserIcon className="w-6 h-6 text-primary" />
          <div>
            <h3 className="text-xl font-bold mb-1">My Persona</h3>
            <p className="text-white/70">Know me as a person</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {personalTraits.map((trait, i) => (
            <motion.div
              key={trait}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-3 rounded-xl bg-background/50 text-center text-sm"
            >
              {trait}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
