import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is there a minimum follower count to apply?",
    answer: "No strict minimum — we look at engagement, content quality, and audience connection just as much as raw numbers. Creators of all sizes are welcome to apply."
  },
  {
    question: "Is travel reimbursement provided?",
    answer: "Accommodation is covered for verified creators. Travel reimbursement is offered on a case-by-case basis depending on your role at the event — details are shared upon confirmation."
  },
  {
    question: "Can I apply as a team or co-creators?",
    answer: "Yes! If you regularly create content together, mention your collaborators in the application and we'll review you as a group."
  },
  {
    question: "What is the Creator Code of Conduct?",
    answer: "Our Code of Conduct outlines expectations around respectful behavior, content guidelines, and professionalism during the event. The full document is shared with all confirmed creators."
  },
  {
    question: "Will I be paid to participate?",
    answer: "FanFest 2026 covers accommodation, perks, and promotion for all creators. Additional paid opportunities (brand collabs, sponsored sessions) may be available separately."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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
          <div className="eyebrow mb-4">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-4">Got Questions?</h2>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-2xl space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.7, ease: "easeOut" }}
              className="border-b border-panelBorder"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-bold text-white">{faq.question}</span>
                <span className={`text-brand-red text-xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted pb-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;