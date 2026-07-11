import { motion } from "framer-motion";

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section id="about" className="relative py-20 lg:py-32 border-t border-panelBorder">
      <div className="container">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div {...fadeInUp} className="eyebrow mb-6">
            WHAT IS FANFEST 2026
          </motion.div>

          {/* Heading */}
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }} className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            Where Creators
            <br />
            Meet Their Fans
          </motion.h2>

          {/* Paragraph */}
          <motion.p {...fadeInUp} transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} className="text-muted max-w-xl">
            Three days of panels, activations, live streams, brand collaborations, and unforgettable fan moments — all under one roof.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;