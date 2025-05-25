import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Stock Predictor",
    subtitle: "Real-time stock forecasting app",
    company: "PERSONAL PROJECT",
    year: "2025",
    metrics: [
      "A machine learning-based stock prediction tool with FastAPI and Streamlit",
      "Features include real-time forecasting",
      "Interactive charts, and an accessible API.",
    ],
    image: `${process.env.PUBLIC_URL}/images/StockPredictor.png`,
    repoUrl: "https://github.com/HassanNewton/StockPredictor",
  },
  {
    title: "BilCleaniken",
    subtitle: "Automated vehicle inspection system",
    company: "BILCLEANIKEN",
    year: "2025",
    metrics: [
      "A computer vision-based system for automated vehicle inspection and documentation",
      "Uses YOLO for object detection and Tesseract for text extraction",
      "Includes color analysis and a user-friendly web interface for interaction",
    ],
    image: `${process.env.PUBLIC_URL}/images/OCR_img.jpg`,
    repoUrl: "https://github.com/Hassonki/BilCleaniken",
  },
  {
    title: "Thesis Work",
    subtitle: "Intelligent invoice processing system using CV and NLP",
    company: "Hulo",
    year: "2024",
    metrics: [
      "Automated invoice data extraction with YOLOv8 and Tesseract OCR",
      "Improved processing accuracy through NER and table parsing",
      "Structured JSON output ready for database integration",
    ],
    image: `${process.env.PUBLIC_URL}/images/Hulo.png`,
    repoUrl: "https://github.com/Detoriun/Hulo",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70"
          >
            Compilation of projects that evoke my sense of pride
          </motion.p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="bg-background-light/80 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Content */}
                  <div className="flex-1 space-y-8">
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="text-sm text-white/50 uppercase tracking-wider mb-4">
                        {study.company} • {study.year}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        {study.title}
                      </h3>
                      <p className="text-xl text-white/70">{study.subtitle}</p>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-4">
                      {study.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-white/90"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                          />
                          <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            {metric}
                          </motion.span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div>
                      <motion.a
                        href={study.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                      >
                        View Work
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2 flex-shrink-0">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background/10">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background gradient effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
