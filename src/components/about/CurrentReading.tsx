import { motion } from "framer-motion";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function CurrentReading() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-1"
    >
      <div className="bg-background-light rounded-2xl p-6 max-h-[360px] max-w-[336px]">
        <div className="flex items-start gap-4 mb-4">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <div>
            <h3 className="text-xl font-bold mb-1">Current Read</h3>
    
          </div>
        </div>
        <div className="aspect-[3/2] rounded-xl overflow-hidden bg-background/50">
          <img
            src="/images/book1.jpg"
            alt="The Alignment Problem"
            className="mx-auto h-auto max-h-[200px] object-contain rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
