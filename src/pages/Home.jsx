import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, BookOpen, Mic } from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";
import stepzyImage from "../assets/stepzy-local.jpg";

export default function Home() {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-5 inline-flex rounded-full bg-[#8ECAE6]/25 px-4 py-2 text-sm font-bold text-[#219EBC]">
          {t.heroBadge}
        </p>

        <h1 className="text-5xl font-black leading-tight tracking-tight text-[#023047] dark:text-white md:text-7xl">
          {t.heroTitleLine1}
          <br />
          {t.heroTitleLine2}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-[#8ECAE6]">
          {t.heroText}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#join"
            className="rounded-full bg-[#FB8500] px-6 py-3 font-bold text-white shadow-xl shadow-[#FB8500]/25 transition hover:bg-[#FFB703]"
          >
            {t.joinButton}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full border border-[#8ECAE6]/60 bg-white px-6 py-3 font-bold text-[#023047] transition hover:border-[#219EBC] hover:text-[#219EBC] dark:border-[#219EBC]/25 dark:bg-white/10 dark:text-white"
          >
            {t.discoverButton}
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ rotate: -2, y: -10 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative rounded-[2.5rem] border border-[#8ECAE6]/50 bg-white p-4 shadow-xl dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
      >
        <div className="h-[430px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#8ECAE6]/55 via-[#219EBC]/20 to-[#FFB703]/20">
          <img
            src={stepzyImage}
            alt="Stepzy Local"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <Info icon={MapPin} label={t.location} value="Algiers" />
          <Info icon={Users} label={t.community} value="English Club" />
          <Info icon={BookOpen} label={t.learning} value="Study Sessions" />
          <Info icon={Mic} label={t.focus} value="Speaking" />
        </div>
      </motion.div>
    </section>
  );
}

function Info({ label, value, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="rounded-2xl border border-[#8ECAE6]/60 bg-[#8ECAE6]/15 p-3 transition hover:bg-[#8ECAE6]/30 dark:border-[#219EBC]/25 dark:bg-[#8ECAE6]/10 dark:hover:bg-[#219EBC]/15"
    >
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-[#219EBC]/15 text-[#219EBC]">
        <Icon size={17} />
      </div>

      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-0.5 text-base font-black text-[#023047] dark:text-white md:text-lg">
        {value}
      </p>
    </motion.div>
  );
}
