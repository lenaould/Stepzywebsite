import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Lock } from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";

const plans = [
  {
    name: "Basic",
    price: "10,000",
    note: "3 months: 24,000 DZD",
    available: true,
    features: ["2 sessions per week", "Center access", "Buddy discount 10%"],
  },
  {
    name: "Pay per Session",
    price: "1,500",
    note: "Pay only when you attend",
    available: true,
    features: ["1 session", "Flexible payment", "Center access"],
  },
  {
    name: "Regular",
    price: "20,000",
    note: "3 months: 45,000 DZD",
    popular: true,
    available: false,
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
    available: false,
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
  const [showMore, setShowMore] = useState(false);

  const visiblePlans = showMore
    ? plans
    : plans.filter((plan) => plan.available);
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
        {visiblePlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={plan.available ? { y: -8 } : {}}
            className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-xl transition duration-300 ${
              plan.available
                ? "border-[#8ECAE6]/50 bg-white dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
                : "border-[#FB8500]/50 bg-white opacity-75 dark:bg-[#0B3A57]"
            }`}
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#219EBC]/10 blur-3xl" />

            {!plan.available && (
              <span className="relative mb-5 inline-flex items-center gap-2 rounded-full bg-[#FB8500] px-4 py-1 text-xs font-black text-white">
                <Clock size={14} />
                Coming Soon
              </span>
            )}

            {plan.popular && plan.available && (
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

              <p className="mt-2 font-bold text-[#219EBC]">
                {plan.name === "Pay per Session" ? "/ session" : "/ month"}
              </p>

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

            {plan.available ? (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#join"
                className="relative mt-8 flex w-full justify-center rounded-full bg-[#FB8500] px-6 py-4 font-black text-white shadow-xl shadow-[#FB8500]/20 transition hover:bg-[#FFB703]"
              >
                Enroll Now →
              </motion.a>
            ) : (
              <button
                disabled
                className="relative mt-8 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-[#FB8500]/40 bg-[#FB8500]/10 px-6 py-4 font-black text-[#FB8500]"
              >
                <Lock size={17} />
                Not Available Yet
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="rounded-full border border-[#FB8500]/40 bg-[#FB8500]/10 px-8 py-4 font-black text-[#FB8500] transition hover:bg-[#FB8500] hover:text-white"
        >
          {showMore ? "Show Less" : "View More Plans"}
        </button>
      </div>
    </section>
  );
}
