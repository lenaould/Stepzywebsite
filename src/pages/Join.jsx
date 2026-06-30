import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwncOM60-IYamWumX02ioCzPNGU5vc-iZ9riavXsmgUhf62e9MWrgAcyjScRI9nK9VH/exec";

export default function Join() {
  const { lang } = useApp();
  const t = translations[lang];

  const schedules = [
    "Saturday • Morning (10:00 - 12:00)",
    "Saturday • Afternoon (3:30 - 5:30)",
    "Saturday • Evening (6:00 - 8:00)",
  ];

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const plans = [
    { name: "Basic", available: true },
    { name: "Pay per session", available: true },
    { name: "Regular", available: false },
    { name: "Premium", available: false },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    city: "",
    level: "Beginner",
    schedules: [],
    plan: "Basic",
    notes: "",
  });

  const [status, setStatus] = useState("");

  function updateField(name, value) {
    if ((name === "firstName" || name === "lastName") && /\d/.test(value)) {
      return;
    }

    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function toggleSchedule(schedule) {
    setForm((prev) => ({
      ...prev,
      schedules: prev.schedules.includes(schedule)
        ? prev.schedules.filter((item) => item !== schedule)
        : [...prev.schedules, schedule],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.schedules.length === 0) {
      alert("Please choose at least one Saturday availability.");
      return;
    }

    setStatus("sending");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });

      setStatus("success");

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        age: "",
        city: "",
        level: "Beginner",
        schedules: [],
        plan: "Basic",
        notes: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="join" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 rounded-[2.5rem] border border-[#8ECAE6]/50 bg-white p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-[#219EBC]/20 dark:bg-[#0B3A57]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
            04
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#023047] dark:text-white">
            {t.joinTitle}
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-[#8ECAE6]">
            {t.joinText}
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.01 }}
          className="rounded-[2rem] border border-[#8ECAE6]/60 bg-[#8ECAE6]/10 p-5 dark:border-[#219EBC]/20 dark:bg-[#023047]/35"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <input
              required
              className="stepzy-input"
              placeholder="First name"
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
            />

            <input
              required
              className="stepzy-input"
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
            />

            <input
              required
              className="stepzy-input"
              placeholder="Phone number"
              value={form.phone}
              inputMode="numeric"
              maxLength="10"
              onChange={(e) => updateField("phone", e.target.value)}
            />

            <input
              required
              className="stepzy-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />

            <input
              required
              className="stepzy-input"
              type="number"
              min="5"
              max="99"
              placeholder="Age"
              value={form.age}
              onChange={(e) => updateField("age", e.target.value)}
            />

            <input
              required
              className="stepzy-input"
              placeholder="City"
              value={form.city}
              onChange={(e) => updateField("city", e.target.value)}
            />
          </div>

          <OptionGroup
            title="Level"
            options={levels}
            value={form.level}
            onChange={(value) => updateField("level", value)}
          />

          <OptionGroup
            title="Saturday Availability"
            note="Select all the time slots that work for you. Groups are created based on demand, with a maximum capacity of 15 participants per group."
            options={schedules}
            value={form.schedules}
            multiple
            onChange={toggleSchedule}
          />

          <PlanGroup
            title="Plan"
            plans={plans}
            value={form.plan}
            onChange={(value) => updateField("plan", value)}
          />

          <textarea
            rows="4"
            className="stepzy-input resize-none"
            placeholder="Anything we should know? Optional"
            value={form.notes}
            onChange={(e) => updateField("notes", e.target.value)}
          />

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FB8500] px-6 py-4 font-black text-white shadow-xl shadow-[#FB8500]/20 transition hover:scale-[1.02] hover:bg-[#FFB703]"
          >
            {status === "sending" ? "Sending..." : "Pre-Register"}
            <Send size={18} />
          </button>

          {status === "success" && (
            <p className="mt-4 rounded-xl bg-green-500/10 p-4 text-center font-bold text-green-600">
              🎉 Pre-registration sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 rounded-xl bg-red-500/10 p-4 text-center font-bold text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function OptionGroup({
  title,
  note,
  options,
  value,
  onChange,
  multiple = false,
}) {
  return (
    <div className="mb-5">
      <p className="mb-2 font-bold text-[#023047] dark:text-white">{title}</p>

      {note && (
        <p className="mb-3 text-sm leading-6 text-slate-500 dark:text-[#8ECAE6]">
          {note}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = multiple ? value.includes(option) : value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-[#219EBC] bg-[#219EBC] text-white"
                  : "border-[#8ECAE6]/60 bg-white text-[#023047] hover:bg-[#219EBC]/10 dark:border-[#219EBC]/20 dark:bg-[#0B3A57] dark:text-white"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PlanGroup({ title, plans, value, onChange }) {
  return (
    <div className="mb-5">
      <p className="mb-3 font-bold text-[#023047] dark:text-white">{title}</p>

      <div className="flex flex-wrap gap-2">
        {plans.map((plan) => {
          const active = value === plan.name;

          return (
            <button
              key={plan.name}
              type="button"
              disabled={!plan.available}
              onClick={() => plan.available && onChange(plan.name)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-[#219EBC] bg-[#219EBC] text-white"
                  : plan.available
                    ? "border-[#8ECAE6]/60 bg-white text-[#023047] hover:bg-[#219EBC]/10 dark:border-[#219EBC]/20 dark:bg-[#0B3A57] dark:text-white"
                    : "cursor-not-allowed border-[#FB8500]/40 bg-[#FB8500]/10 text-[#FB8500] opacity-80"
              }`}
            >
              {plan.available ? plan.name : `${plan.name} - Soon`}
            </button>
          );
        })}
      </div>
    </div>
  );
}
