import { motion } from "framer-motion";

const features = [
  {
    icon: "🎙️",
    title: "Live Panels & Talks",
    description: "Host your own stage session, Q&A, or join a creator roundtable. Real conversations with your real fans."
  },
  {
    icon: "📸",
    title: "Meet & Greet Booths",
    description: "Dedicated creator booths where fans can interact, take photos, and grab exclusive merchandise."
  },
  {
    icon: "🤝",
    title: "Brand Collaborations",
    description: "Connect with top-tier sponsors looking for authentic creator partnerships during the event."
  },
  {
    icon: "🎮",
    title: "Live Content Challenges",
    description: "Compete in cross-creator content battles, streamed live for the audience and judged by fans."
  },
  {
    icon: "🌐",
    title: "Global Streaming Reach",
    description: "The entire event is live-streamed to millions worldwide — your content extends far beyond the venue."
  },
  {
    icon: "🎉",
    title: "Creator After-Party",
    description: "An exclusive closing night celebration — network, celebrate, and create memories off-camera too."
  }
];

function Features() {
  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="border-t border-panelBorder py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="bg-panel border border-panelBorder rounded-xl p-8 transition-all hover:border-brand-red/30"
            >
              <div className="w-12 h-12 rounded-lg bg-panelBorder flex items-center justify-center mb-4 text-xl">
                {feature.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-muted text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;