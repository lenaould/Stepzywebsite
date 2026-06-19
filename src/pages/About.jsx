import { motion } from "framer-motion";
import { Users, MessageCircle, TrendingUp } from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";

export default function About() {
  const { lang } = useApp();
  const t = translations[lang];

  const cards = [
    {
      icon: MessageCircle,
      title: "Practice",
      text: "Speak English through real conversations, games, and discussions.",
    },
    {
      icon: Users,
      title: "Community",
      text: "Meet people with the same goal: improving English with confidence.",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      text: "Grow step by step with regular sessions and a supportive space.",
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-8 md:p-12 dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
      >
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
          01
        </p>

        <h2 className="mt-3 text-4xl font-black text-[#023047] dark:text-white">
          {t.aboutTitle}
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-[#8ECAE6]">
          {t.aboutText}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[#8ECAE6]/60 bg-[#8ECAE6]/15 p-5 dark:border-[#219EBC]/25 dark:bg-[#8ECAE6]/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#219EBC]/15 text-[#219EBC]">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-black text-[#023047] dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-3 leading-6 text-slate-600 dark:text-[#8ECAE6]">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
