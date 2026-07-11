import { motion } from "framer-motion";

const perks = [
  {
    number: "01",
    title: "All-Access Badge",
    description: "Backstage, VIP zones, creator lounge, and all event areas throughout the three days."
  },
  {
    number: "02",
    title: "Complimentary Accommodation",
    description: "Hotel stay covered for the full duration of the event for verified creators."
  },
  {
    number: "03",
    title: "Dedicated Creator Stage",
    description: "Your own scheduled time slot on the creator main stage or breakout rooms."
  },
  {
    number: "04",
    title: "Professional Content Crew",
    description: "On-site videographers and photographers available to document your FanFest moments."
  },
  {
    number: "05",
    title: "Promotion Package",
    description: "Featured on all official FanFest 2026 social media, website, and email marketing to 500K+ subscribers."
  },
  {
    number: "06",
    title: "Exclusive Merch Kit",
    description: "Limited-edition FanFest 2026 creator merchandise kit sent to you before the event."
  }
];

function Perks() {
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
          <div className="eyebrow mb-4">CREATOR PERKS</div>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-4">What You Get</h2>
          <p className="text-muted max-w-2xl">
            Every creator who joins FanFest 2026 gets a full support package designed to help you shine.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="bg-panel border border-panelBorder rounded-xl p-6 transition-all hover:border-brand-red/30"
            >
              <div className="text-brand-red font-bold text-2xl mb-3">{perk.number}</div>
              <h3 className="font-bold text-white mb-2">{perk.title}</h3>
              <p className="text-muted text-sm">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Perks;