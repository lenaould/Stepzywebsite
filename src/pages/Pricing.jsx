import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";

const plans = [
  {
    name: "Basic",
    price: "10,000",
    note: "3 months: 24,000 DZD",
    features: ["2 sessions per week", "Center access", "Buddy discount 10%"],
  },
  {
    name: "Regular",
    price: "20,000",
    note: "3 months: 45,000 DZD",
    popular: true,
    features: [
      "4 sessions per week",
      "Center access",
      "Buddy discount 15%",
      "10% off classes & workshops",
    ],
  },
  {
    name: "Premium",
    price: "30,000",
    note: "3 months: 75,000 DZD",
    features: [
      "Unlimited sessions",
      "Center access",
      "Buddy discount 20%",
      "20% off classes & workshops",
      "Community voice",
    ],
  },
];

export default function Pricing() {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
        03
      </p>

      <h2 className="mt-3 text-4xl font-black text-[#023047] dark:text-white">
        {t.pricingTitle}
      </h2>

      <p className="mt-4 text-lg text-slate-600 dark:text-[#8ECAE6]">
        {t.pricingText}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-xl transition duration-300 ${
              plan.popular
                ? "scale-[1.03] border-[#FB8500] bg-gradient-to-br from-[#FB8500]/10 via-white to-[#8ECAE6]/10 dark:from-[#FB8500]/15 dark:via-[#0B3A57] dark:to-[#219EBC]/10"
                : "border-[#8ECAE6]/50 bg-white dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
            }`}
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#219EBC]/10 blur-3xl" />

            {plan.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-[#FB8500] px-4 py-1 text-sm font-black text-white">
                Most Popular ⭐
              </span>
            )}

            <h3 className="relative text-2xl font-black text-[#023047] dark:text-white">
              {plan.name}
            </h3>

            <div className="relative mt-6">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-[#023047] dark:text-white">
                  {plan.price}
                </span>
                <span className="pb-2 font-bold text-[#219EBC]">DZD</span>
              </div>

              <p className="mt-2 font-bold text-[#219EBC]">/ month</p>

              <p className="mt-3 text-sm text-slate-500 dark:text-[#8ECAE6]">
                {plan.note}
              </p>
            </div>

            <div className="relative mt-8 space-y-4">
              {plan.features.map((feature) => (
                <p
                  key={feature}
                  className="flex items-center gap-3 text-slate-600 dark:text-[#8ECAE6]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#219EBC]/15">
                    <Check className="text-[#219EBC]" size={15} />
                  </span>
                  {feature}
                </p>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#join"
              className="relative mt-8 flex w-full justify-center rounded-full bg-[#FB8500] px-6 py-4 font-black text-white shadow-xl shadow-[#FB8500]/20 transition hover:bg-[#FFB703]"
            >
              Enroll Now →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
