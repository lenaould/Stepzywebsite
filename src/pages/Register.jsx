import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const levels = ["Beginner", "Intermediate", "Advanced"];

const schedules = [
  "Saturday Morning",
  "Saturday Afternoon",
  "Saturday Evening",
  "Sunday Morning",
  "Sunday Afternoon",
  "Sunday Evening",
  "Monday Morning",
  "Monday Afternoon",
  "Monday Evening",
  "Tuesday Morning",
  "Tuesday Afternoon",
  "Tuesday Evening",
  "Wednesday Morning",
  "Wednesday Afternoon",
  "Wednesday Evening",
  "Thursday Morning",
  "Thursday Afternoon",
  "Thursday Evening",
];

const plans = [
  { name: "Basic", available: true },
  { name: "Pay per session", available: true },
  { name: "Regular", available: false },
  { name: "Premium", available: false },
];

export default function Join() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    city: "",
    level: "Beginner",
    plan: "Basic",
    note: "",
  });

  const [selectedSchedules, setSelectedSchedules] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "firstName" || name === "lastName") && /\d/.test(value)) {
      return;
    }

    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const toggleSchedule = (schedule) => {
    setSelectedSchedules((prev) =>
      prev.includes(schedule)
        ? prev.filter((item) => item !== schedule)
        : [...prev, schedule],
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedSchedules.length === 0) {
      alert("Please choose at least one preferred schedule.");
      return;
    }

    console.log({
      ...form,
      preferredSchedules: selectedSchedules,
    });

    alert("Pre-registration submitted successfully!");
  };

  return (
    <section id="join" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
            04
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#023047] dark:text-white">
            Join Stepzy
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-[#8ECAE6]">
            Fill out the form and our team will contact you shortly.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-6 shadow-xl dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="stepzy-input"
              placeholder="First name"
            />

            <input
              required
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="stepzy-input"
              placeholder="Last name"
            />

            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="stepzy-input"
              placeholder="Phone number"
              maxLength="10"
              inputMode="numeric"
            />

            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="stepzy-input"
              placeholder="Email"
            />

            <input
              required
              name="age"
              type="number"
              min="5"
              max="99"
              value={form.age}
              onChange={handleChange}
              className="stepzy-input"
              placeholder="Age"
            />

            <input
              required
              name="city"
              value={form.city}
              onChange={handleChange}
              className="stepzy-input"
              placeholder="City"
            />
          </div>

          <div className="mt-5">
            <h3 className="font-black text-[#023047] dark:text-white">Level</h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {levels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setForm({ ...form, level })}
                  className={`rounded-full px-5 py-2 font-bold transition ${
                    form.level === level
                      ? "bg-[#8ECAE6] text-white"
                      : "border border-[#219EBC]/20 text-[#023047] dark:text-white"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-black text-[#023047] dark:text-white">
              Preferred schedule
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-[#8ECAE6]">
              You can choose more than one schedule. Each group has a maximum
              capacity of 15 people.
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              {schedules.map((schedule) => (
                <button
                  key={schedule}
                  type="button"
                  onClick={() => toggleSchedule(schedule)}
                  className={`rounded-full px-5 py-2 font-bold transition ${
                    selectedSchedules.includes(schedule)
                      ? "bg-[#8ECAE6] text-white"
                      : "border border-[#219EBC]/20 text-[#023047] dark:text-white"
                  }`}
                >
                  {schedule}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-black text-[#023047] dark:text-white">Plan</h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  type="button"
                  disabled={!plan.available}
                  onClick={() =>
                    plan.available && setForm({ ...form, plan: plan.name })
                  }
                  className={`rounded-full px-5 py-2 font-bold transition ${
                    form.plan === plan.name
                      ? "bg-[#8ECAE6] text-white"
                      : plan.available
                        ? "border border-[#219EBC]/20 text-[#023047] dark:text-white"
                        : "cursor-not-allowed border border-[#FB8500]/40 bg-[#FB8500]/10 text-[#FB8500]"
                  }`}
                >
                  {plan.available ? plan.name : `${plan.name} - Soon`}
                </button>
              ))}
            </div>
          </div>

          <textarea
            required
            name="note"
            value={form.note}
            onChange={handleChange}
            className="stepzy-input mt-5 min-h-32"
            placeholder="Anything we should know?"
          />

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FB8500] px-6 py-4 font-black text-white shadow-xl shadow-[#FB8500]/20 transition hover:scale-[1.02] hover:bg-[#FFB703]"
          >
            Pre-Register
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
