import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    date: "MAY 15 – JUN 30, 2026",
    title: "Applications Open",
    description: "Submit your creator application form with your details and profile links."
  },
  {
    number: "2",
    date: "JULY 1 – JULY 15, 2026",
    title: "Review & Selection",
    description: "Our team reviews all submissions. Shortlisted creators are contacted directly."
  },
  {
    number: "3",
    date: "JULY 20, 2026",
    title: "Confirmation & Onboarding",
    description: "Selected creators receive official confirmation, event details, and onboarding kit."
  },
  {
    number: "4",
    date: "AUGUST 14–16, 2026",
    title: "FanFest 2026 — LIVE",
    description: "Three days of content, connection, and unforgettable fan experiences."
  }
];

function Timeline() {
  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="border-t border-panelBorder py-20 lg:py-32">
      <div className="container">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 max-w-2xl">
          <div className="eyebrow mb-4">KEY DATES</div>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-4">Application Timeline</h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-2xl relative">
          {/* Connecting line */}
          <div className="absolute top-6 bottom-0 left-5 w-0.5 bg-brand-red" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: "easeOut" }}
                className="relative flex items-start gap-6"
              >
                {/* Badge */}
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-bold text-white flex-shrink-0 z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <div className="text-brand-orange font-bold text-sm mb-1">{step.date}</div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;