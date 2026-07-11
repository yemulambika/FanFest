import { motion } from "framer-motion";

const items = [
  { icon: "📹", label: "YouTubers" },
  { icon: "🎵", label: "TikTokers" },
  { icon: "📷", label: "Instagrammers" },
  { icon: "🎙️", label: "Podcaster" },
  { icon: "🎮", label: "Streamers" },
  { icon: "✍️", label: "Bloggers" },
  { icon: "🎨", label: "Digital Artists" },
  { icon: "💪", label: "Fitness Creators" },
  { icon: "🔍", label: "Food Creators" },
  { icon: "👗", label: "Fashion Creators" }
];

function Eligibility() {
  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="border-t border-panelBorder py-20 lg:py-32">
      <div className="container">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12">
          <div className="eyebrow mb-4">ELIGIBILITY</div>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-4">Who Can Apply?</h2>
          <p className="text-muted max-w-2xl">
            We welcome creators across every niche, platform, and audience size. If you create — this is for you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.7, ease: "easeOut" }}
              className="bg-panel border border-panelBorder rounded-xl p-6 flex flex-col items-center text-center transition-all hover:border-brand-red/30"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <span className="font-bold text-white text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Eligibility;