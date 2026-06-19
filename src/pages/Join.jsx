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

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    city: "",
    level: "Beginner",
    days: [],
    time: "Evening",
    plan: "Basic",
    notes: "",
  });

  const [status, setStatus] = useState("");

  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];

  function updateField(name, value) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function toggleDay(day) {
    setForm((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
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
        days: [],
        time: "Evening",
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
              onChange={(e) => updateField("phone", e.target.value)}
            />

            <input
              className="stepzy-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />

            <input
              className="stepzy-input"
              placeholder="Age"
              value={form.age}
              onChange={(e) => updateField("age", e.target.value)}
            />

            <input
              className="stepzy-input"
              placeholder="City"
              value={form.city}
              onChange={(e) => updateField("city", e.target.value)}
            />
          </div>

          <select
            className="stepzy-input"
            value={form.level}
            onChange={(e) => updateField("level", e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <p className="mb-3 font-bold text-[#023047] dark:text-white">
            Preferred days
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  form.days.includes(day)
                    ? "bg-[#219EBC] text-white"
                    : "border-[#8ECAE6]/60 bg-white text-[#023047]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <select
            className="stepzy-input"
            value={form.time}
            onChange={(e) => updateField("time", e.target.value)}
          >
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>

          <select
            className="stepzy-input"
            value={form.plan}
            onChange={(e) => updateField("plan", e.target.value)}
          >
            <option>Basic</option>
            <option>Regular</option>
            <option>Premium</option>
            <option>Pay per session</option>
          </select>

          <textarea
            rows="4"
            className="stepzy-input resize-none"
            placeholder="Anything we should know?"
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
