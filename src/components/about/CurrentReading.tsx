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
      <div className="bg-background-light rounded-2xl pl-6 pr-6 pt-5 max-h-[300px] max-w-[336px]">
        <div className="flex items-start gap-4 mb-2">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <div>
            <h3 className="text-xl font-bold mb-1">Current Read</h3>
          </div>
        </div>
        <div className="aspect-[3/2] rounded-xl overflow-hidden bg-background-light">
          <img
            src={`${process.env.PUBLIC_URL}/images/book1.jpg`}
            alt="The Alignment Problem"
            className="mx-auto h-auto max-h-[160px] object-contain rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
