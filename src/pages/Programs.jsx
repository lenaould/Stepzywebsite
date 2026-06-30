import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Film,
  ArrowUpRight,
  Clock,
  Lock,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";

const programs = [
  {
    icon: MessageCircle,
    title: "Speaking Club",
    description:
      "Debates, discussions, games, and activities to improve speaking confidence.",
    available: true,
  },
  {
    icon: BookOpen,
    title: "Book Club",
    description:
      "Read together, analyze ideas, share perspectives, and build vocabulary.",
    available: false,
  },
  {
    icon: Film,
    title: "Movie Club",
    description:
      "Watch, analyze, and discuss movies while practicing English naturally.",
    available: false,
  },
];

export default function Programs() {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <section id="programs" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
          02
        </p>

        <h2 className="mt-3 text-4xl font-black text-[#023047] dark:text-white">
          {t.programsTitle}
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-[#8ECAE6]">
          {t.programsText}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((program, index) => {
          const Icon = program.icon;

          return (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={program.available ? { y: -8 } : {}}
              className={`group relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-xl transition dark:bg-[#0B3A57] ${
                program.available
                  ? "border-[#8ECAE6]/50 hover:border-[#219EBC] dark:border-[#219EBC]/40"
                  : "border-[#FB8500]/40 opacity-70 dark:border-[#FB8500]/50"
              }`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#219EBC]/10 blur-3xl" />

              <div
                className={`absolute right-5 top-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black ${
                  program.available
                    ? "bg-[#219EBC] text-white"
                    : "bg-[#FB8500] text-white"
                }`}
              >
                {program.available ? (
                  <>
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                    Available Now
                  </>
                ) : (
                  <>
                    <Clock size={14} />
                    Coming Soon
                  </>
                )}
              </div>

              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8ECAE6]/50 to-[#219EBC]/20 text-[#219EBC]">
                <Icon size={30} />
              </div>

              <h3 className="relative text-2xl font-black text-[#023047] dark:text-white">
                {program.title}
              </h3>

              <p className="relative mt-4 leading-7 text-slate-600 dark:text-[#8ECAE6]">
                {program.description}
              </p>

              {program.available ? (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#pricing"
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-[#219EBC]/30 bg-[#219EBC]/10 px-5 py-3 font-bold text-[#219EBC] transition hover:bg-[#219EBC] hover:text-white"
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </motion.a>
              ) : (
                <button
                  disabled
                  className="relative mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[#FB8500]/40 bg-[#FB8500]/10 px-5 py-3 font-bold text-[#FB8500]"
                >
                  <Lock size={17} />
                  Not Available Yet
                </button>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
