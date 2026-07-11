import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Subtle radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,_rgba(255,59,59,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div {...fadeInUp} className="eyebrow mb-6">
          🎁 OPEN APPLICATIONS — LIMITED SPOTS
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeInUp} transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }} className="font-display text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tight leading-none mb-8">
          <span className="block text-white">Create.</span>
          <span className="block text-brand-red">Connect.</span>
          <span className="block text-white">Dominate.</span>
        </motion.h1>

        {/* Description */}
        <motion.p {...fadeInUp} transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} className="text-muted max-w-2xl mx-auto mb-12">
          FanFest 2026 is calling on creators like you to be part of the biggest fan-powered event of the year. Share your world, grow your audience, and make history.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="/apply"
            className="px-8 py-3 rounded-full bg-brand-red text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-red/90 transition-colors"
          >
            Apply as a Creator
          </Link>
          <Link
            to="#about"
            className="px-8 py-3 rounded-full border border-panelBorder text-white font-bold text-sm uppercase tracking-wide hover:bg-panel transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeInUp} transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }} className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
          <div className="flex flex-col">
            <span className="text-brand-orange font-bold text-2xl md:text-3xl">AUG 14-16</span>
            <span className="text-muted text-xs uppercase tracking-wider mt-1">EVENT DATES</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-orange font-bold text-2xl md:text-3xl">2026</span>
            <span className="text-muted text-xs uppercase tracking-wider mt-1">EDITION</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-orange font-bold text-2xl md:text-3xl">50K+</span>
            <span className="text-muted text-xs uppercase tracking-wider mt-1">EXPECTED FANS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-orange font-bold text-2xl md:text-3xl">200+</span>
            <span className="text-muted text-xs uppercase tracking-wider mt-1">CREATOR SPOTS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;