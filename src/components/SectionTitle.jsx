import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-black text-[#023047] dark:text-white md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-[#8ECAE6]">
          {text}
        </p>
      )}
    </motion.div>
  );
}
