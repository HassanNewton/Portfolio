import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <div className="bg-background-light rounded-2xl overflow-hidden relative">
      <div className="w-full h-[200px] relative">
        <img
          src="/images/map.png"
          alt="Malmö map"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: "115px", height: "115px" }}
        >
          <img
            src="/images/Avatar.svg"
            alt="Location marker"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute left-4 bottom-4 bg-background/80 backdrop-blur-sm rounded-full px-4 py-1 text-sm h-8 flex items-center justify-center whitespace-nowrap shadow-lg">
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
          Malmö, Sweden
        </div>
      </div>
    </div>
  );
}
